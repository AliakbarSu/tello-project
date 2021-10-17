import React from 'react'
import {
  ButtonGroup,
  ButtonGroupBtn,
  TrainingWrapper,
  TrainingInstruction,
  StatusWrapper,
  StatusItem,
  StatusText,
  StatusTitle
} from './styles'
import trData from '../data'

class Training extends React.Component {
  state = {
    trainingObjectives: trData,
    interval: null,
    currentTrainingAction: trData[0],
    prompt: 'Once ready click "Start Training" button'
  }

  interval = null
  trainingInterval = null

  constructor() {
    super()
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  trainAction = async (action) => {
    for (const count of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      await this.sleep(1000)
      this.props.onAddAction(action)
    }
  }

  isNumeric = (str) => {
    if (typeof str != 'string') return false
    return !isNaN(str)
  }

  startTraining = async () => {
    for (const item of this.state.trainingObjectives) {
      this.setState((state) => ({
        ...state,
        currentTrainingAction: item,
        prompt: 'Display Sign For ' + item.action
      }))
      await this.trainAction(item.action)
    }
    this.setState((state) => ({
      prompt: 'Training the model. hold on'
    }))
    this.props.onTrain()
  }

  render() {
    return (
      <TrainingWrapper>
        <TrainingInstruction>{this.state.prompt}</TrainingInstruction>
        <ButtonGroup>
          <ButtonGroupBtn onClick={this.startTraining}>
            Start Training
          </ButtonGroupBtn>
          <ButtonGroupBtn onClick={() => this.props.onCommand('flip')}>
            Flip
          </ButtonGroupBtn>
          <ButtonGroupBtn onClick={() => this.props.onCommand('cw')}>
            360 View
          </ButtonGroupBtn>
          <ButtonGroupBtn onClick={() => this.props.onCommand('battery?')}>
            Battery
          </ButtonGroupBtn>
          <ButtonGroupBtn onClick={() => this.props.onSaveModel()}>
            Save Model
          </ButtonGroupBtn>
          <ButtonGroupBtn onClick={() => this.props.onLoadModel()}>
            Load Model
          </ButtonGroupBtn>
        </ButtonGroup>
        <StatusWrapper>
          <StatusItem>
            <StatusTitle>Flying Status: </StatusTitle>
            <StatusText ok={this.props.status == 'ok'}>
              {this.props.status.toUpperCase()}
            </StatusText>
          </StatusItem>
          <StatusItem>
            <StatusTitle>Battery: </StatusTitle>
            <StatusText
              ok={this.props.battery ? this.props.battery > 50 : false}
            >
              {this.props.battery + '%'}
            </StatusText>
          </StatusItem>
        </StatusWrapper>
      </TrainingWrapper>
    )
  }
}

export default Training
