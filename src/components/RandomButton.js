import React from 'react'
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

function RandomButton(props) {
  return (
    <Button
      href="#"
      onClick={event => {
        event.preventDefault()
        props.onTriggerRandom()
      }}
    >
      GO!
    </Button>
  )
}

export default RandomButton