import React from 'react'
import { ThroutleButtonWrapper, ThroutleButton } from './styles'

function Controls(props) {
  return (
    <div className="throutles">
      <ThroutleButtonWrapper>
        <ThroutleButton onClick={() => props.onCommand('up')}>
          Up
        </ThroutleButton>
        <ThroutleButton onClick={() => props.onCommand('down')}>
          Down
        </ThroutleButton>
      </ThroutleButtonWrapper>
    </div>
  )
}

export default Controls
