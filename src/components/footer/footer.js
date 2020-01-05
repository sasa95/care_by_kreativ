import React from 'react'
import styled from 'styled-components'
import SocialIcon from './social-icon'
import fbIcon from '../../images/social/facebook.svg'
import liIcon from '../../images/social/linkedin.svg'
import igIcon from '../../images/social/instagram.svg'
import mq from '../../styles/media-queries'

const FooterContainer = styled.footer`
  padding: 0 15px 0;
  text-align: center;
`

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 50px 0 20px;
  max-width: 250px;
  margin: auto;

  @media ${mq.tablet1_up} {
    padding: 60px 0 50px;
    max-width: 400px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIcon icon={fbIcon} />
        <SocialIcon icon={igIcon} />
        <SocialIcon icon={liIcon} />
      </SocialIconsContainer>
    </FooterContainer>
  )
}

export default Footer
