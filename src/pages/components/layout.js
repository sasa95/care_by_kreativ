import React from 'react'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import Navigation from './navigation'
import breakpoints from '../../styles/breakpoints'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${breakpoints.tablet} {
    width: 750px;
  }

  @media ${breakpoints.desktopS} {
    width: 970px;
  }
  @media ${breakpoints.desktopM} {
    width: 1170px;
  }
`

const Layout = ({ children }) => (
  <>
    <Normalize />
    <Navigation />
    <Container>{children}</Container>
  </>
)

export default Layout
