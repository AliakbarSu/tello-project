import React from 'react'
import { ButtonsWrapper, ButtonControls, SingleButtonWrapper } from './styles'

function Controls(props) {
  return (
    <div className="controls">
      <ButtonsWrapper>
        <SingleButtonWrapper>
          <ButtonControls onClick={() => props.onCommand('forward')}>
            Forward
          </ButtonControls>
        </SingleButtonWrapper>
        <ButtonControls onClick={() => props.onCommand('left')}>
          Left
        </ButtonControls>
        <ButtonControls onClick={() => props.onCommand('right')}>
          Right
        </ButtonControls>
        <SingleButtonWrapper>
          <ButtonControls onClick={() => props.onCommand('back')}>
            Back
          </ButtonControls>
        </SingleButtonWrapper>
      </ButtonsWrapper>
    </div>
  )
}

export default Controls
