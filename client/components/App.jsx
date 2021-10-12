import React, { useEffect } from 'react'
const io = require('socket.io-client')
import { Title } from './styles'
import Controls from './Controls'
import Throutles from './Throutle'

function App(props) {
  const socket = io('ws://' + document.location.hostname + ':3000', {
    reconnectionDelayMax: 10000
  })
  socket.on('connect', () => {
    console.log('connected successfully')
    console.log(socket.id) // "G5p5..."
  })
  useEffect(() => {}, [])

  const onCommandHandler = (command) => {
    socket.emit(command, { a: 'b', c: [] })
  }
  return (
    <div className="game">
      <Title>Welcome to the Memory Gam</Title>
      <h2>Match all the tiles to win</h2>
      <button onClick={() => onCommandHandler('up')}>Up</button>
      <button onClick={() => onCommandHandler('Left')}>left</button>
      <Throutles />
      <Controls />
    </div>
  )
}

export default App
