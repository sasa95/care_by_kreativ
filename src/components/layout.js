import React, { useEffect } from 'react'
import { Normalize } from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import nProgress from 'nprogress'
import Nav from './navigation/nav'
import Footer from './footer/footer'
import mq from '@styles/media-queries'
import Bubbles from './bubbles'

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
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #nprogress .bar {
    background: rgb(42,82,202)!important;
    background: linear-gradient(rgba(42,82,202,1) 0%, rgba(146,128,249,1) 35%)!important;
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

  useEffect(() => {
    nProgress.configure({ minimum: 0.5, showSpinner: false })

    if (typeof window !== 'undefined') {
      require('smooth-scroll')('a[href*="#"]', {
        offset,
        durationMax: 500,
        updateURL: false,
      })
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Nav />
      <Main>{children}</Main>
      <Footer />
      <Bubbles />
    </>
  )
}

export default Layout
