import React from 'react'
import styled from 'styled-components'
import mq from '@styles/media-queries'

const IconContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  @media ${mq.tablet1_up} {
    width: 60px;
    height: 60px;
  }
`

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40px;

  @media ${mq.tablet1_up} {
    height: 60px;
  }
`

const SocialIcon = ({ icon }) => {
  return (
    <IconContainer>
      <Icon src={icon} alt="icon" />
    </IconContainer>
  )
}

export default SocialIcon
