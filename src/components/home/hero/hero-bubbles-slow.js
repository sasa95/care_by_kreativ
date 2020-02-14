import React, { forwardRef } from 'react'
import styled from 'styled-components'
import colors from '@styles/colors'

const randomColors = Object.values(colors)
const sizes = [12, 14, 16]

const template = i => {
  let size = sizes[Math.floor(Math.random() * 3)]
  let color = randomColors[Math.floor(Math.random() * 3)]
  let position = i % 2 !== 0 ? 'left' : 'right'

  return `
    & > *:nth-child(${i}) {
      background-color: ${color};
      ${position}: ${15 + 15 * Math.floor(Math.random() * 10)}px;
      width: ${size}px;
      height: ${size}px;
    }
  `
}

const getInitialProps = number => {
  let str = ''
  for (let index = 1; index <= number; index += 1) {
    str += template(index, index)
  }
  return str
}

const SlowBubbles = styled.div`
  ${getInitialProps(5)}
`

const generateBubbles = number => {
  return new Array(number).fill().map((b, i) => <Bubble key={i} />)
}

const Bubble = styled.span`
  display: block;
  border-radius: 50%;
  position: absolute;
  opacity: 0;
  z-index: 100;
`

const HeroBubblesSlow = forwardRef((props, ref) => (
  <SlowBubbles ref={ref}>{generateBubbles(5)}</SlowBubbles>
))

export default HeroBubblesSlow
