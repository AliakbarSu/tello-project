import React from 'react'
import { FlightButton, FlightButtonsWrapper } from './styles'

function FlightButtons(props) {
  return (
    <FlightButtonsWrapper>
      <FlightButton onClick={() => props.onCommand('takeoff')}>
        Take Off
      </FlightButton>
      <FlightButton onClick={() => props.onCommand('land')}>Land</FlightButton>
    </FlightButtonsWrapper>
  )
}

export default FlightButtons
