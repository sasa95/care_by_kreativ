import React, { useContext } from 'react'
import styled from 'styled-components'
import mq from '../../styles/media-queries'
import colors from '../../styles/colors'
import NavigationContext from '../../context/navigation-context'

const List = styled.ul`
  text-align: center;
  list-style: none;
  line-height: 4.5rem;
  margin: 0;
  padding: 0;

  @media ${mq.tablet1_up} {
    display: flex;
    text-align: left;
    line-height: normal;
  }
`

const ListItem = styled.li`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;

  @media ${mq.mobile3_up} {
    font-size: 1.8rem;
  }

  @media ${mq.mobile4_up} {
    font-size: 2rem;
  }

  @media ${mq.tablet1_up} {
    color: ${colors.kreativBlue};
    font-size: 1rem;
    font-weight: 300;

    &:not(:last-child) {
      padding-right: 1rem;
    }
  }
`

const Link = styled.a`
  color: ${colors.kreativBlue}!important;
  text-decoration: none;
`

const NavList = () => {
  const { setNavExpanded } = useContext(NavigationContext)

  return (
    <List>
      <ListItem onClick={() => setNavExpanded(false)}>
        <Link href="/#projects">Projects</Link>
      </ListItem>

      <ListItem>
        <Link href="/#skills">Skills</Link>
      </ListItem>

      <ListItem>
        <Link href="/#squad">Squad</Link>
      </ListItem>

      <ListItem>hey@carebykreativ.com</ListItem>
    </List>
  )
}

export default NavList
