import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.a `
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

class RandomButton extends Component {

  state = {
    buttonText: 'GO!'
  }

  randomButtonEvent = (event) => {
    event.preventDefault()
    if (!this.props.play) {
      this.props.onPlayRandom()
      this.setState({ buttonText: 'STOP!' })
    } else {
      this.props.onStopRandom()
      this.setState({ buttonText: 'GO!' })
    }
  }

  render() {
    return (
      <Button href="#" onClick={this.randomButtonEvent}>
        {this.state.buttonText}
      </Button>
    )
  }
}

export default RandomButton