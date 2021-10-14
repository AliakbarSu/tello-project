import React from 'react'
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
      <div>
        <p>{this.state.prompt}</p>
        <button onClick={this.startTraining}>Start Training</button>
      </div>
    )
  }
}

export default Training
