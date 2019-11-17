import React, { useContext } from 'react'
import styled from 'styled-components'
import NavigationContext from '../../context/navigation-context'
import NavList from './nav-list'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-color: #345fd5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 0.3s ease-in;
  pointer-events: none;

  ${({ navExpanded }) =>
    navExpanded &&
    `
    opacity: 1;
    pointer-events: all;
    background-color: #345FD5
  `}
`

const NavOverlay = () => {
  const { navExpanded } = useContext(NavigationContext)

  return (
    <Overlay navExpanded={navExpanded}>
      <NavList />
    </Overlay>
  )
}

export default NavOverlay
