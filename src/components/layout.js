import React, { useEffect, useRef } from 'react'
import { Normalize } from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import nProgress from 'nprogress'
import Nav from './navigation/nav'
import Footer from './footer/footer'
import mq from '@styles/media-queries'
import Bubbles from './bubbles'
import gsap from 'gsap/gsap-core'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: poppins, sans-serif;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #nprogress .bar {
    background: rgb(42,82,202)!important;
    background: linear-gradient(rgba(42,82,202,1) 0%, rgba(146,128,249,1) 35%)!important;
  }

  .tl-edges {
    overflow: hidden;
  }

  .tl-wrapper {
    z-index: auto!important;
    transform: none!important;
  }
`

const Main = styled.main`
  min-height: calc(100vh - 126px);

  @media ${mq.mobile3_up} {
    min-height: calc(100vh - 186px);
  }
`

const Layout = ({ children }) => {
  const offset = useMediaQuery({
    query: mq.mobile3_up,
  })
    ? 86
    : 70

  const bubblesRef = useRef()

  useEffect(() => {
    nProgress.configure({ minimum: 0.5, showSpinner: false })

    if (typeof window !== 'undefined') {
      require('smooth-scroll')('a[href*="#"]', {
        offset,
        durationMax: 500,
        updateURL: false,
      })
    }

    const bubbles = bubblesRef.current.children

    Array.from(bubbles).forEach((b, i) => {
      gsap.to(b, {
        ease: 'none',
        opacity: 1,
        duration: 0,
      })

      gsap.to(b, {
        repeat: -1,
        bottom: '100%',
        ease: 'none',
        duration: () => i * 1.8 + 10,
      })
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Nav />
      <Main>{children}</Main>
      <Footer />
      <Bubbles ref={bubblesRef} />
    </>
  )
}

export default Layout
