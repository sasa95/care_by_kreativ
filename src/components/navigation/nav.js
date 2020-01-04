import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { useMediaQuery } from 'react-responsive'
import NavigationContext from '../../context/navigation-context'
import NavHamburger from './nav-hamburger'
import NavOverlay from './nav-overlay'
import mq from '../../styles/media-queries'
import NavList from './nav-list'
import logo from '../../images/logo.svg'
import { Container } from '../../styles/shared'

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
`
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background: #fff;

  ${Container}
`

const NavBrand = styled.img`
  width: 40px;
  opacity: ${({ navExpanded }) => (navExpanded ? 0 : 1)};
  z-index: 100;

  @media ${mq.mobile3_up} and ${mq.portrait},
    ${mq.tablet1_up} {
    width: 56px;
  }
`

const Nav = () => {
  const { navExpanded } = useContext(NavigationContext)
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [currScrollpos, setCurrScrollpos] = useState(-1)
  const [visible, setVisible] = useState(true)
  let unmounted = false

  const isTablet = useMediaQuery({
    query: mq.tablet1_up,
  })

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300), false)
    document.addEventListener('scrollStart', handleSmoothScroll, false)

    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 300), false)
      document.removeEventListener('scrollStart', handleSmoothScroll, false)
      unmounted = true
    }
  }, [])

  useEffect(() => {
    if (!unmounted) {
      const visible = currScrollpos < 1 || prevScrollpos > currScrollpos

      setVisible(visible)
      setPrevScrollpos(currScrollpos)
    }
  }, [currScrollpos])

  const handleScroll = () => {
    if (!unmounted) {
      const currentScrollPos = window.pageYOffset
      setCurrScrollpos(currentScrollPos)
    }
  }

  const handleSmoothScroll = () => {
    setTimeout(() => {
      setVisible(true)
    }, 800)
  }

  return (
    <Navigation navExpanded={navExpanded} visible={visible}>
      <Navbar navExpanded={navExpanded} visible={visible}>
        <NavBrand navExpanded={navExpanded} src={logo} />
        {isTablet ? <NavList /> : <NavHamburger />}
      </Navbar>
      {!isTablet && <NavOverlay />}
    </Navigation>
  )
}

export default Nav
