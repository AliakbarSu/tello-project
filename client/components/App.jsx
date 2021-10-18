import React, { useState, useEffect } from 'react'
const io = require('socket.io-client')
import { ControlPanel, DashboardWrapper } from './styles'
import Controls from './Controls'
import Throutles from './Throutle'
import VideoContainer from './VideoContainer'
import FlightButtons from './FlightButtons'
import Training from './Training'
import Sketch from 'react-p5'
import { debounce_leading } from '../utils/debounce'
import commands from '../data'

let mobilenet
let classifier
let video
let label = ''
let detector
let results = []

let socket = io('ws://' + document.location.hostname + ':3000', {
  reconnectionDelayMax: 10000
})

function App(props) {
  const [status, setStatus] = useState('No Connection')
  const [battery, setBattery] = useState(100)
  let interval = null

  const handleOnCommand = (command) => {
    console.log(command)
    socket.emit(command)
  }

  useEffect(() => {
    if (interval) {
      clearInterval(interval)
    }
    interval = setInterval(() => {
      handleOnCommand('battery?')
    }, 10000)
  }, [])

  const isNumeric = (str) => {
    if (typeof str != 'string') return false
    return !isNaN(str)
  }

  socket.on('connect', () => {
    console.log('connected successfully')
    console.log(socket.id) // "G5p5..."
  })

  socket.on('message', (msg) => {
    console.log(msg)
    if (isNumeric(msg)) {
      setBattery(parseInt(msg))
    } else {
      setStatus(msg)
    }
  })

  const handleAddAction = (action) => {
    console.log(action)
    classifier.addImage(action)
  }

  const handleTrainBtn = () => {
    classifier.train(whileTraining)
  }

  const handleLoadModel = () => {
    classifier.load('model.json', customModelReady)
  }

  const handleSaveModel = () => {
    classifier.save()
  }

  function whileTraining(loss) {
    if (loss === null) {
      console.log('training completed')
      classifier.classify(gotResults)
    } else {
      console.log(loss)
    }
  }

  function gotResults(error, result) {
    if (error) {
      console.log('Error thrown', error)
    } else {
      // console.log(result)
      label = result[0].label
      if (label !== 'idle') {
        debounce_leading(() => handleOnCommand(label), 500)()
      }
      classifier.classify(gotResults)
    }
  }

  function detectionResults(error, res) {
    if (error) {
      console.log('Error thrown', error)
    } else {
      results = res
    }
    detector.then((rs) => rs.detect(video, detectionResults))
  }

  function modelReady() {
    console.log('model is ready!!')
  }

  function customModelReady() {
    classifier.classify(gotResults)
  }

  function videoReady() {
    console.log('video is ready!!')
  }

  function preload() {
    detector = ml5.objectDetector('cocossd')
  }

  const setup = (p5, parent) => {
    p5.createCanvas(700, 600).parent('canvasForHTML')
    // canvas.parent('canvasForHTML')

    video = p5.createCapture(p5.VIDEO)
    video.hide()
    p5.background(0)
    mobilenet = ml5.featureExtractor(
      'MobileNet',
      { numLabels: commands.length },
      modelReady
    )
    classifier = mobilenet.classification(video, videoReady)

    // Detect image
    detector.then((rs) => rs.detect(video, detectionResults))
  }
  const draw = (p5) => {
    p5.image(video, 0, 0, 700, 600)
    p5.fill(173, 255, 47)
    p5.textSize(30)
    p5.text(label, 10, p5.height - 20)

    results.forEach((res) => {
      p5.stroke(255, 255, 0)
      p5.strokeWeight(3)
      p5.noFill(0)
      p5.rect(res.x, res.y, res.width, res.height)
      p5.noStroke()
      p5.fill(0)
      p5.textSize(24)
      p5.text(res.label, res.x + 12, res.y + 24)
    })
  }

  return (
    <div className="tello">
      <Sketch setup={setup} draw={draw} preload={preload} />
      <Training
        battery={battery}
        status={status}
        onCommand={handleOnCommand}
        onAddAction={handleAddAction}
        onTrain={handleTrainBtn}
        onLoadModel={handleLoadModel}
        onSaveModel={handleSaveModel}
      />
      <DashboardWrapper>
        <FlightButtons onCommand={handleOnCommand} />
      </DashboardWrapper>
      <ControlPanel>
        <Throutles onCommand={handleOnCommand} />
        <Controls onCommand={handleOnCommand} />
      </ControlPanel>
    </div>
  )
}

export default App
