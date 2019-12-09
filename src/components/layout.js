import React, { useContext } from 'react'
import { Normalize } from 'styled-normalize'
import styled, { createGlobalStyle } from 'styled-components'
import NavigationContext from '../context/navigation-context'
import Nav from './navigation/nav'
import Bubles from './bubbles/bubbles'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Muli, sans-serif;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    overflow: ${({ navExpanded }) => (navExpanded ? 'hidden' : 'auto')};
  }
`

const Test = styled.div`
  height: 100vh;
`

const Layout = ({ children }) => {
  const { navExpanded } = useContext(NavigationContext)

  return (
    <>
      <GlobalStyle navExpanded={navExpanded} />
      <Normalize />
      <Nav />
      {children}
      <Test>Test section</Test>
      <Bubles />
    </>
  )
}

export default Layout
