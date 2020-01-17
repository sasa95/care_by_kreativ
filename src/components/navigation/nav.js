import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { throttle } from 'lodash'
import MainContext from '../../context/main-context'
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
  width: 40px;
  opacity: ${({ navExpanded }) => (navExpanded ? 0 : 1)};
  z-index: 100;

  @media ${mq.mobile3_up} and ${mq.portrait},
    ${mq.tablet1_up} {
    width: 56px;
  }
`

const Nav = () => {
  const { navExpanded } = useContext(MainContext)
  const [prevScrollpos, setPrevScrollpos] = useState(0)
  const [currScrollpos, setCurrScrollpos] = useState(-1)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300), false)
    document.addEventListener('scrollStart', handleSmoothScroll, false)

    return () => {
      window.removeEventListener('scroll', throttle(handleScroll, 300), false)
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
    <Navigation navExpanded={navExpanded} visible={visible} y={currScrollpos}>
      <Navbar navExpanded={navExpanded} visible={visible}>
        <Link to="/">
          <NavBrand navExpanded={navExpanded} src={logo} />
        </Link>
        <NavList />
      </Navbar>
    </Navigation>
  )
}

export default Nav
