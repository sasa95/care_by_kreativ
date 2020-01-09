import React, { useContext } from 'react'
import styled from 'styled-components'
import MainContext from '../../context/main-context'
import NavList from './nav-list'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s ease-in;
  pointer-events: none;

  ${({ navExpanded }) =>
    navExpanded &&
    `
    opacity: 1;
    pointer-events: all;
    background-color: #fff;
  `}
`

const NavOverlay = () => {
  const { navExpanded } = useContext(MainContext)

  return (
    <Overlay navExpanded={navExpanded}>
      <NavList />
    </Overlay>
  )
}

export default NavOverlay
