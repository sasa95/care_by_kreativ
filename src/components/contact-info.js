import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const InfoSection = styled.section`
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

const ContactInfo = () => {
  return (
    <InfoSection>
      <Text>You can Google us, Love us or contact us on:</Text>
      <Email href="mailto:hey@carebykreativ.com">hey@carebykreativ.com</Email>
    </InfoSection>
  )
}

export default ContactInfo
