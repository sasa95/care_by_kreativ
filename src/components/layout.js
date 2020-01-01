import React, { useContext, useEffect } from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import NavigationContext from '../context/navigation-context'
import Nav from './navigation/nav'
import Bubbles from './bubbles/bubbles'
import Footer from './footer/footer'
import mq from '../styles/media-queries'

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
    overflow: ${({ navExpanded }) => (navExpanded ? 'hidden' : 'auto')};
  }

 
`

const Layout = ({ children }) => {
  const offset = useMediaQuery({
    query: mq.mobile3_up,
  })
    ? 86
    : 70

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('smooth-scroll')('a[href*="#"]', {
        offset,
        durationMax: 500,
        updateURL: false,
      })
    }
  }, [])

  const { navExpanded } = useContext(NavigationContext)

  return (
    <>
      <GlobalStyle navExpanded={navExpanded} />
      <Normalize />
      <Nav />
      {children}
      <Footer />
      <Bubbles />
    </>
  )
}

export default Layout
