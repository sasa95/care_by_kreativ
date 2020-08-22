import React from 'react'
import styled from 'styled-components'
import mq from '@styles/media-queries'

const Text = styled.h1`
  margin: 0 0 20px;
  font-weight: bold;
  line-height: 2.4rem;
  font-size: 1.4rem;

  @media ${mq.mobile3_up} {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media ${mq.tablet3_up} {
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }
`

const Heading = ({ text }) => {
  return <Text>{text}</Text>
}
export default Heading
