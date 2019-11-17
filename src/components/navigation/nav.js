import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { useMediaQuery } from 'react-responsive'
import NavigationContext from '../../context/navigation-context'
import NavHamburger from './nav-hamburger'
import NavOverlay from './nav-overlay'
import breakpoints from '../../styles/breakpoints'
import NavList from './nav-list'

const Navigation = styled.nav`
  position: fixed;
  top: -100px;
  width: 100%;
  transition: 0.5s;
  ${({ visible }) =>
    visible &&
    `
    top: 0;
    background-color: #fff;
  `}
`
const Navbar = styled.div`
  @media ${breakpoints.desktopM} {
    width: 1170px;
    margin: 0 auto;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px;
`

const NavBrand = styled.img`
  opacity: ${({ navExpanded }) => (navExpanded ? 0 : 1)};
`

const Nav = () => {
  const { navExpanded } = useContext(NavigationContext)
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [currScrollpos, setCurrScrollpos] = useState(-1)
  const [visible, setVisible] = useState(true)

  const isTablet = useMediaQuery({
    query: breakpoints.tablet,
  })

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300))
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const visible = prevScrollpos > currScrollpos
    setVisible(visible)
    setPrevScrollpos(currScrollpos)
  }, [currScrollpos])

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setCurrScrollpos(currentScrollPos)
  }

  return (
    <Navigation navExpanded={navExpanded} visible={visible}>
      <Navbar navExpanded={navExpanded} visible={visible}>
        <NavBrand navExpanded={navExpanded} src="/img/logo.svg" alt="" />
        {isTablet ? <NavList /> : <NavHamburger />}
      </Navbar>
      {!isTablet && <NavOverlay />}
    </Navigation>
  )
}

export default Nav
