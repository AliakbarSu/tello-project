import React from 'react'
import { ButtonsWrapper, ButtonControls, SingleButtonWrapper } from './styles'

function Controls(props) {
  return (
    <div className="controls">
      <ButtonsWrapper>
        <SingleButtonWrapper>
          <ButtonControls>Forward</ButtonControls>
        </SingleButtonWrapper>
        <ButtonControls>Left</ButtonControls>
        <ButtonControls>Right</ButtonControls>
        <SingleButtonWrapper>
          <ButtonControls>Back</ButtonControls>
        </SingleButtonWrapper>
      </ButtonsWrapper>
    </div>
  )
}

export default Controls
