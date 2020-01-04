import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import mq from '../styles/media-queries'
import { Container } from '../styles/shared'
import colors from '../styles/colors'

const ContactSection = styled.section`
  ${Container}
  padding-top: 90px;
  height: 100vh;

  @media ${mq.mobile3_up} {
    padding-top: 106px;
  }
`

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: normal;
  line-height: 2.4rem;
  font-size: 1.8rem;

  @media ${mq.mobile3_up} {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media ${mq.tablet3_up} {
    font-size: 3.2rem;
  }
`

const Description = styled.p`
  margin: 30px 0;
  color: rgba(51, 51, 51, 0.72);
  text-align: center;
`

const Email = styled.a`
  color: ${colors.kreativBlue};
  text-decoration: none;
`

const Contact = () => {
  return (
    <>
      <Head title="Contact" />
      <ContactSection>
        <Title>Let’s make something glorious!</Title>
        <Description>
          Say hi to{' '}
          <Email href="mailto:hey@carebykreativ.com">
            hey@carebykreativ.com
          </Email>
          or reach out via form below.
        </Description>

        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />

          <label>
            Email
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Message
            <input type="text" name="message" />
          </label>

          <button type="submit">Send</button>
        </form>
      </ContactSection>
    </>
  )
}

export default Contact
