import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import mq from '@styles/media-queries'
import colors from '@styles/colors'
import { Container } from '@styles/shared'
import logo from '@images/logo.svg'
import NavList from './nav-list'

const Navigation = styled.nav`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  transition: 0.5s;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
`

const Navbar = styled.div`
  ${Container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`

const NavBrand = styled.img`
  height: 40px;
  z-index: 100;

  @media ${mq.tablet1_up} {
    height: 50px;
  }
`

const Nav = () => {
  return (
    <Navigation>
      <Navbar>
        <AniLink cover direction="right" bg={colors.kreativViolet} to="/">
          <NavBrand src={logo} alt="Care by Kreativ logo" />
        </AniLink>
        <NavList />
      </Navbar>
    </Navigation>
  )
}

export default Nav
