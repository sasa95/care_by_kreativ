import React from 'react'
import styled from 'styled-components'
import mq from '@styles/media-queries'

const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 220px;

  @media ${mq.tablet3_up} {
    max-width: 350px;
  }
`

const Logo = ({ src, alt }) => {
  return <Img src={src} alt="asdf" />
}
export default Logo
