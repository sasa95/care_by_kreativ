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
      ${position}: calc(50% + ${10 * Math.floor(Math.random() * 3) + 1}%);
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

const FastBubbles = styled.div`
  ${getInitialProps(15)}
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

const HeroBubblesFast = forwardRef((props, ref) => (
  <FastBubbles ref={ref}>{generateBubbles(15)}</FastBubbles>
))

export default HeroBubblesFast
