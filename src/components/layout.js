import React, { useContext } from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import NavigationContext from '../context/navigation-context'
import Nav from './navigation/nav'
import Bubbles from './bubbles/bubbles'
import Footer from './footer/footer'

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
