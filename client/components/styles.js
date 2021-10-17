import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 280px;
  height: 280px;
  padding: 12px;
  background: #d5d5d5;
  border-radius: 50%;
`

export const ButtonControls = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: black;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #5e9f23;
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

export const SingleButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ThroutleButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  padding: 12px;
  background: #d5d5d5;
  border-radius: 5px;
`

export const ThroutleButton = styled.div`
  margin-top: 20px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: black;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #5e9f23;
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:first-child {
    margin-top: 0;
  }
`

export const ControlPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
  width: 100%;
`

export const FlightButtonsWrapper = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
`

export const FlightButton = styled.div`
  height: 80px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: black;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #5e9f23;
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`

export const DashboardWrapper = styled.div`
  width: 100%;
  border: 1px solid #d1d1d1;
  padding: 12px;
  padding-bottom: 18px;
`

export const TrainingWrapper = styled.div`
  background: #ededed;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const TrainingInstruction = styled.h4`
  width: 100%;
  text-align: center;
  padding: 12px;
`

export const ButtonGroup = styled.div`
  &:after {
    content: '';
    clear: both;
    display: table;
  }
`

export const ButtonGroupBtn = styled.button`
  background-color: black; /* Green background */
  border: 1px solid white; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
  &:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }
  &:hover {
    background-color: #3e8e41;
  }
`

export const StatusWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`

export const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StatusTitle = styled.p`
  font-weight: bold;
`

export const StatusText = styled.p`
  text-align: center;
  padding: 0 12px;
  color: ${(props) => (props.ok ? 'green' : 'red')};
`
