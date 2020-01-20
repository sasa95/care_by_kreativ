import React from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '@styles/colors'

const randomColors = Object.values(colors)

const heroAnimation = keyframes`
  0% {
    top: 100vh;
    opacity: 1
  } 

  100% {
    top: -10%;
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
      animation-delay: ${2 + (i / 2) * Math.random()}s;
      animation-duration: ${Math.max(2, 10 * Math.random())}s;
      background-color: ${color};
      ${position}: ${15 + 15 * Math.floor(Math.random() * 10)}px;
      width: ${size}px;
      height: ${size}px;
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

const SlowBubbles = styled.div`
  ${getAnimations(5)}
`

const generateBubbles = number => {
  return new Array(number).fill().map((b, i) => <Bubble key={i} />)
}

const Bubble = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  animation: ${heroAnimation} 3s linear;
  opacity: 0;
  z-index: 100;
`

const HeroBubblesSlow = () => <SlowBubbles>{generateBubbles(5)}</SlowBubbles>

export default HeroBubblesSlow
