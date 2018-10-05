import React, { Component } from 'react'
import styled from 'styled-components'

import RandomButton from './RandomButton'

import data from '../data/data'

const CenterVertical = styled.section `
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
`

const RandomText = styled.h1 `
  text-align: center;
  font-size: 56px;
  width: 100%;
`

class RandomTextSection extends Component {

  constructor(props) {
    super(props)
    this.randomNumber = 0
  }
  
  state = {
    randomText: ''
  }

  handleTriggerRandom = () => {
    this.randomInterval = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * data.length)
      const selectedName = data[this.randomNumber]
      this.setState({ randomText: selectedName })
    }, 50)
  }

  handleStopRandom = () => {
    clearInterval(this.randomInterval)
  }

  componentDidMount() {
    if (this.state.randomText.length < 1) {
      this.setState({ randomText: 'Ready for giveaway?' })
    }
  }

  render() {
    return (
      <CenterVertical>
        <RandomText>{this.state.randomText}</RandomText>
        <RandomButton onTriggerRandom={this.handleTriggerRandom} />
      </CenterVertical>
    )
  }
}

export default RandomTextSection