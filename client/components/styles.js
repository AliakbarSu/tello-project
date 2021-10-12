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
  background: #c7c7c7;
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
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
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
  background: #c7c7c7;
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
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:first-child {
    margin-top: 0;
  }
`
