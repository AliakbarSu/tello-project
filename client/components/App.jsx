import React, { useEffect } from 'react'
const io = require('socket.io-client')
import { Title, ControlPanel, DashboardWrapper } from './styles'
import Controls from './Controls'
import Throutles from './Throutle'
import VideoContainer from './VideoContainer'
import FlightButtons from './FlightButtons'

function App(props) {
  const socket = io('ws://' + document.location.hostname + ':3000', {
    reconnectionDelayMax: 10000
  })
  socket.on('connect', () => {
    console.log('connected successfully')
    console.log(socket.id) // "G5p5..."
  })

  const handleOnCommand = (command) => {
    socket.emit(command)
  }

  const handleRightBtn = () => {
    classifier.addImage('right')
  }

  const handleLeftBtn = () => {
    classifier.addImage('left')
  }

  const handleTrainBtn = () => {
    classifier.train(whileTraining)
  }

  return (
    <div className="tello">
      <div>
        <div>
          <button onClick={handleLeftBtn}>Left</button>
          <button onClick={handleRightBtn}>Right</button>
          <button onClick={handleTrainBtn}>Train</button>
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
