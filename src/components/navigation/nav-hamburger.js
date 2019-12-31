import React, { useContext } from 'react'
import styled from 'styled-components'
import NavigationContext from '../../context/navigation-context'
import mq from '../../styles/media-queries'

const Icon = styled.div`
  width: 35px;
  height: 21px;
  position: relative;
  z-index: 1;

  @media ${mq.mobile3_up} and ${mq.portrait} {
    width: 40px;
  }

  @media ${mq.tablet1_up} {
    display: none;
  }
`

const Line = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: ${({ navExpanded }) => (navExpanded ? '#fff' : '#345fd5')};
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;

  :nth-child(1) {
    top: 0px;

    ${({ navExpanded }) =>
      navExpanded &&
      `
      top: 9px;
      width: 0%;
      left: 50%;
    `}
  }

  :nth-child(2) {
    top: 9px;

    ${({ navExpanded }) =>
      navExpanded &&
      `
      transform: rotate(45deg);
    `}
  }

  :nth-child(3) {
    top: 9px;

    ${({ navExpanded }) =>
      navExpanded &&
      `
      transform: rotate(-45deg);
    `}
  }

  :nth-child(4) {
    top: 18px;

    ${({ navExpanded }) =>
      navExpanded &&
      `
      top: 9px;
      width: 0%;
      left: 50%;
    `}
  }
`

const NavHamburger = () => {
  const { navExpanded, setNavExpanded } = useContext(NavigationContext)

  return (
    <Icon
      navExpanded={navExpanded}
      onClick={() => setNavExpanded(!navExpanded)}
    >
      <Line navExpanded={navExpanded} />
      <Line navExpanded={navExpanded} />
      <Line navExpanded={navExpanded} />
      <Line navExpanded={navExpanded} />
    </Icon>
  )
}

export default NavHamburger
