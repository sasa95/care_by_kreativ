import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../styles/colors'

const randomColors = Object.values(colors)

const bodyAnimation = keyframes`
  0% {
    bottom: 0;
    opacity: 1
  } 

  100% {
    bottom: calc(100% + 20px);
    opacity: 1
  }
`

const template = i => {
  let sizes = [12, 14, 16]
  let size = sizes[Math.floor(Math.random() * 3)]
  let color = randomColors[Math.floor(Math.random() * 3)]
  let position = i % 2 !== 0 ? 'left' : 'right'

  return `
    & > *:nth-child(${i}) {
      animation-delay: ${i * 2 - 2}s
      animation-duration: ${Math.max(15, 18 * Math.random())}s
      background-color: ${color};
      ${position}: ${15 + 15 * Math.floor(Math.random() * 10)}px
      width: ${size}px
      height: ${size}px
      opacity: 0;
    }
  `
}

const getAnimations = number => {
  let str = ''
  for (let index = 1; index <= number; index += 1) {
    str += template(index, index)
  }
  return str
}

const BodyBubbles = styled.div`
  height: 16px;
  ${getAnimations(5)};
`

const generateBubbles = number => {
  return new Array(number).fill().map((b, i) => <Bubble key={i} />)
}

const Bubble = styled.span`
  display: table-cell;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  opacity: 0;
  animation: ${bodyAnimation} 1s linear infinite forwards;
  z-index: 10;
`

const Bubbles = () => <BodyBubbles>{generateBubbles(5)}</BodyBubbles>

export default Bubbles
