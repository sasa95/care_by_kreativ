import React, { useContext } from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import NavigationContext from '../context/navigation-context'
import Nav from './navigation/nav'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Muli, sans-serif;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
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
    </>
  )
}

export default Layout
