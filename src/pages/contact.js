import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import nProgress from 'nprogress'
import Head from '@components/head'
import mq from '@styles/media-queries'
import { Container, FormField } from '@styles/shared'
import colors from '@styles/colors'
import MainContext from '@context/main-context'

const ContactSection = styled.section`
  ${Container}
  position: relative;
  overflow: hidden;
  padding-top: 90px;

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
  margin: 30px auto;
  color: rgba(51, 51, 51, 0.72);
  text-align: center;
  width: 100%;
  max-width: 490px;

  @media ${mq.tablet3_up} {
    max-width: 100%;
    margin: 45px auto;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: auto;
`

const Email = styled.a`
  color: ${colors.kreativBlue};
  text-decoration: none;
`

const Label = styled.label`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
`

const Input = styled.input`
  ${FormField}
`

const Message = styled.textarea`
  ${FormField}
  height: 200px;
  resize: none;
`

const SendButton = styled.button`
  display: block;
  margin: auto;
  border: 2px solid ${colors.kreativBlue};
  border-radius: 10px;
  padding: 13px 7px;
  width: 150px;
  color: rgba(26, 26, 26, 72);
  background: transparent;
  font-weight: bold;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;

  @media ${mq.tablet3_up} {
    align-self: flex-end;
    margin: 0;
    width: 200px;
    padding: 25px 35px;
  }
`

const Contact = ({ location }) => {
  const { setPathname, siteLoaded, setSiteLoaded } = useContext(MainContext)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const contactForm = useRef()
  const hiddenLink = useRef(null)

  useEffect(() => {
    setPathname(location.pathname)

    if (!siteLoaded) {
      setSiteLoaded(true)
    }
  }, [])

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (name && email && message) {
      nProgress.start()

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': contactForm.current.getAttribute('name'),
          name,
          email,
          message,
        }),
      })
        .then(() => {
          nProgress.done()
          hiddenLink.current.children[0].click()
        })
        .catch(error => {
          nProgress.done()
          console.error(`error in submiting the form data:${error}`)
        })
    }
  }

  return (
    <>
      <Head title="Contact" />
      <ContactSection>
        <Title>Let’s make something glorious!</Title>

        <Description>
          Say hi to{' '}
          <Email href="mailto:hey@carebykreativ.com">
            hey@carebykreativ.com{' '}
          </Email>
          or reach out via form below.
        </Description>

        <Form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/thanks"
          name="Kreativ form"
          onSubmit={handleSubmit}
          ref={contactForm}
        >
          <Input type="hidden" name="bot-field" />
          <Input type="hidden" name="form-name" value="Kreativ form" />

          <Label htmlFor="nameInput">Name:</Label>
          <Input
            type="text"
            name="name"
            id="nameInput"
            placeholder="Name"
            required
            onChange={e => setName(e.target.value)}
          />

          <Label htmlFor="emailInput">Email:</Label>
          <Input
            type="email"
            name="email"
            id="emailInput"
            placeholder="Email"
            required
            onChange={e => setEmail(e.target.value)}
          />

          <Label htmlFor="messageInput">Message:</Label>
          <Message
            name="message"
            id="messageInput"
            placeholder="Message"
            required
            onChange={e => setMessage(e.target.value)}
          ></Message>

          <SendButton type="submit">Send message</SendButton>
        </Form>
      </ContactSection>

      <div style={{ display: 'none' }} ref={hiddenLink}>
        <AniLink cover direction="right" bg={colors.kreativViolet} to="/thanks">
          i am clicked
        </AniLink>
      </div>
    </>
  )
}

export default Contact
