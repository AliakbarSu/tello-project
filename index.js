const http = require('http')
const fs = require('fs')
const WebSocket = require('ws')
const spawn = require('child_process').spawn
const express = require('express')
const path = require('path')

const TELLO_IP = '192.168.10.1'
const TELLO_PORT = 8889

const HTTP_PORT = 3000
const STREAM_PORT = 3001

const htmlFilePath = path.join(__dirname, 'client', 'index.html')

const contentServer = express()
contentServer.use(express.static(path.join(__dirname, 'client')))
contentServer.get('/', (req, res) => res.sendFile(htmlFilePath))
contentServer.listen(HTTP_PORT)

const streamServer = http
  .createServer(function (request, response) {
    request.on('data', function (data) {
      webSocketServer.broadcast(data)
    })
  })
  .listen(STREAM_PORT)

const webSocketServer = new WebSocket.Server({
  server: streamServer
})

webSocketServer.broadcast = function (data) {
  webSocketServer.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

setTimeout(function () {
  var args = [
    '-i',
    'udp://0.0.0.0:11111',
    '-r',
    '30',
    '-s',
    '960x720',
    '-codec:v',
    'mpeg1video',
    '-b',
    '800k',
    '-f',
    'mpegts',
    'http://127.0.0.1:3001/stream'
  ]

  var streamer = spawn('ffmpeg', args)

  streamer.on('exit', function (code) {
    console.log('Failure', code)
  })

  streamer.on('error', function (code) {
    console.log('Failure', code)
  })
}, 3000)
