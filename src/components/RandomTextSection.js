import React, { Component } from 'react'
import styled from 'styled-components'

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

const RandomButton = styled.a `
  background-color: palevioletred;
  border: 3px solid palevioletred;
  color: #ffffff;
  display: inline-block;
  font-size: 18px;
  margin: 0 auto;
  padding: 18px 56px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffffff;
    color: palevioletred;
  }
`

class RandomTextSection extends Component {
  
  state = {
    randomText: ''
  }

  componentDidMount() {
    if (this.state.randomText < 1) {
      this.setState({ randomText: 'Ready for giveaway?' })
    }
  }

  render() {
    return (
      <CenterVertical>
        <RandomText>{this.state.randomText}</RandomText>
        <RandomButton href="#">GO!</RandomButton>
      </CenterVertical>
    )
  }
}

export default RandomTextSection