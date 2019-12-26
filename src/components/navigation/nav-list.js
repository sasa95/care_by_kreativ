import React from 'react'
import styled from 'styled-components'
import query from '../../styles/breakpoints'
import colors from '../../styles/colors'

const List = styled.ul`
  text-align: center;
  list-style: none;
  line-height: 4.5rem;
  margin: 0;
  padding: 0;

  @media ${query.tablet1_up} {
    display: flex;
    text-align: left;
    line-height: normal;
  }
`

const ListItem = styled.li`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;

  @media ${query.mobile3_up} {
    font-size: 1.8rem;
  }

  @media ${query.mobile4_up} {
    font-size: 2rem;
  }

  @media ${query.tablet1_up} {
    color: ${colors.kreativBlue};
    font-size: 1rem;
    font-weight: 300;

    &:not(:last-child) {
      padding-right: 1rem;
    }
  }
`

const NavList = () => {
  return (
    <List>
      <ListItem>Projects</ListItem>
      <ListItem>Skills</ListItem>
      <ListItem>About Us</ListItem>
      <ListItem>hey@carebykreativ.com</ListItem>
    </List>
  )
}

export default NavList