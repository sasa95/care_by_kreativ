import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import mq from '@styles/media-queries'
import colors from '@styles/colors'
import { Container } from '@styles/shared'
import logo from '@images/logo.svg'
import { throttle } from '@helpers/throttle'
import NavList from './nav-list'

const Navigation = styled.nav`
  position: fixed;
  z-index: 1;
  top: -100px;
  width: 100%;
  transition: 0.5s;
  ${({ visible }) =>
    visible &&
    `
    top: 0;
  `}

  ${({ y }) =>
    y > 10 &&
    `
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  `}
`
const Navbar = styled.div`
  ${Container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #fff;
`

const NavBrand = styled.img`
  height: 40px;
  z-index: 100;

  @media ${mq.mobile3_up} and ${mq.portrait},
    ${mq.tablet1_up} {
      height: 56px;
  }
`

const Nav = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [currScrollpos, setCurrScrollpos] = useState(-1)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 100), false)
    document.addEventListener('scrollStart', handleSmoothScroll, false)

    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 100), false)
      document.removeEventListener('scrollStart', handleSmoothScroll, false)
    }
  }, [])

  useEffect(() => {
    const visible = currScrollpos < 1 || prevScrollpos > currScrollpos

    setVisible(visible)
    setPrevScrollpos(currScrollpos)
  }, [currScrollpos])

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset

    setCurrScrollpos(currentScrollPos)
  }

  const handleSmoothScroll = () => {
    setTimeout(() => {
      setVisible(true)
    }, 800)
  }

  return (
    <Navigation visible={visible} y={currScrollpos}>
      <Navbar visible={visible}>
        <AniLink cover direction="right" bg={colors.kreativViolet} to="/">
          <NavBrand src={logo} alt="Care by Kreativ logo" />
        </AniLink>
        <NavList />
      </Navbar>
    </Navigation>
  )
}

export default Nav
