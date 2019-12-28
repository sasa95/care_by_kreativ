import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/colors'
import SocialIcon from './social-icon'
import fbIcon from '../../images/social/facebook.svg'
import liIcon from '../../images/social/linkedin.svg'
import igIcon from '../../images/social/instagram.svg'
import query from '../../styles/breakpoints'

const FooterContainer = styled.footer`
  padding: 0 15px 0;
  text-align: center;
`

const Text = styled.p`
  margin: 0 0 20px;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.3;
  color: rgba(26, 26, 26, 0.72);
`

const Email = styled.a`
  color: ${colors.kreativBlue};
  font-size: 1.15rem;
  text-decoration: none;
`

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 30px 0 20px;
  max-width: 250px;
  margin: auto;

  @media ${query.tablet1_up} {
    padding: 60px 0 50px;
    max-width: 400px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Text>You can Google us, Love us or contact us on:</Text>
      <Email href="mailto:hey@carebykreativ.com">hey@carebykreativ.com</Email>

      <SocialIconsContainer>
        <SocialIcon icon={fbIcon} />
        <SocialIcon icon={igIcon} />
        <SocialIcon icon={liIcon} />
      </SocialIconsContainer>
    </FooterContainer>
  )
}

export default Footer
