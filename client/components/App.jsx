import React, { useState, useEffect } from 'react'
const io = require('socket.io-client')
import { Title, ControlPanel, DashboardWrapper } from './styles'
import Controls from './Controls'
import Throutles from './Throutle'
import VideoContainer from './VideoContainer'
import FlightButtons from './FlightButtons'
import Training from './Training'
let socket = io('ws://' + document.location.hostname + ':3000', {
  reconnectionDelayMax: 10000
})

function App(props) {
  const [status, setStatus] = useState('ok')
  const [battery, setBattery] = useState(100)
  let interval = null

  const handleOnCommand = (command) => {
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
    classifier.addImage(action)
  }

  const handleTrainBtn = () => {
    classifier.train(whileTraining)
  }

  return (
    <div className="tello">
      <div>
        <Training
          battery={battery}
          status={status}
          onCommand={handleOnCommand}
          onAddAction={handleAddAction}
          onTrain={handleTrainBtn}
        />
        <div>
          {/* <button onClick={handleLeftBtn}>Left</button>
          <button onClick={handleRightBtn}>Right</button>
          <button onClick={handleTrainBtn}>Train</button> */}
        </div>
      </div>
      <Title>Welcome to the Memory Gam</Title>
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
