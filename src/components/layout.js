import React, { useContext } from 'react'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import NavigationContext from '../context/navigation-context'
import Nav from './navigation/nav'
import { container } from '../styles/shared'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: Muli, sans-serif;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding-top: 116px;
    overflow: ${({ navExpanded }) => (navExpanded ? 'hidden' : 'auto')};

  }
`

const Container = styled.div`
  ${container}
`

const Full = styled.div`
  height: 100vh;
  background: #fafafa;
`

const Layout = ({ children }) => {
  const { navExpanded } = useContext(NavigationContext)

  return (
    <>
      <GlobalStyle navExpanded={navExpanded} />
      <Normalize />
      <Nav />
      <Container>
        {children}
        <Full>Full 1</Full>
        <Full>Full 2</Full>
        <Full>Full 3</Full>
        <Full>Full 4</Full>
      </Container>
    </>
  )
}

export default Layout
