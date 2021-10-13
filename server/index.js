const app = require('./server')
const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)
const { setup } = require('./tello')
const { sendCommand } = require('./telloConsole')

const PORT = process.env.PORT || 3000

const io = new Server(server)

io.on('connection', (socket) => {
  console.log('a user connected')
  // Drone controlls
  socket.on('takeoff', (msg) => {
    sendCommand('takeoff')
  })
  socket.on('up', (msg) => {
    sendCommand('up')
  })
  socket.on('down', (msg) => {
    sendCommand('down')
  })
  socket.on('right', (msg) => {
    sendCommand('right')
  })
  socket.on('left', (msg) => {
    sendCommand('left')
  })
  socket.on('forward', (msg) => {
    sendCommand('forward')
  })
  socket.on('land', (msg) => {
    sendCommand('land')
  })
})

server.listen(PORT, function () {
  setup()
  console.log('Listening on port', PORT)
})
