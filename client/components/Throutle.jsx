import React from 'react'
import { ThroutleButtonWrapper, ThroutleButton } from './styles'

function Controls(props) {
  return (
    <div className="throutles">
      <ThroutleButtonWrapper>
        <ThroutleButton>Up</ThroutleButton>
        <ThroutleButton>Down</ThroutleButton>
      </ThroutleButtonWrapper>
    </div>
  )
}

export default Controls
