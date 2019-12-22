import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { throttle } from 'lodash'
import { useMediaQuery } from 'react-responsive'
import NavigationContext from '../../context/navigation-context'
import NavHamburger from './nav-hamburger'
import NavOverlay from './nav-overlay'
import query from '../../styles/breakpoints'
import NavList from './nav-list'
import logo from '../../images/logo.svg'
import { container } from '../../styles/shared'

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
  padding-top: 15px;

  ${container}

  @media (min-height: 375px) and ${query.landscape},
    ${query.tablet1_up} and ${query.portrait} {
    padding-top: 30px;
  }
`

const NavBrand = styled.img`
  width: 40px;
  opacity: ${({ navExpanded }) => (navExpanded ? 0 : 1)};
  z-index: 100;

  @media ${query.mobile3_up} and ${query.portrait},
    ${query.tablet1_up} {
    width: 56px;
  }
`

const Nav = () => {
  const { navExpanded } = useContext(NavigationContext)
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [currScrollpos, setCurrScrollpos] = useState(-1)
  const [visible, setVisible] = useState(true)

  const isTablet = useMediaQuery({
    query: query.tablet1_up,
  })

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300))
    return () => window.removeEventListener('scroll', handleScroll)
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
