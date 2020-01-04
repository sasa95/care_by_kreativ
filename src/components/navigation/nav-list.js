import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Scrollspy from 'react-scrollspy'
import mq from '../../styles/media-queries'
import colors from '../../styles/colors'
import NavigationContext from '../../context/navigation-context'

const List = styled(Scrollspy)`
  text-align: center;
  list-style: none;
  line-height: 3.5rem;
  margin: 0;
  padding: 0;

  @media ${mq.tablet1_up} {
    display: flex;
    text-align: left;
    line-height: normal;
  }
`

const ListItem = styled.li`
  color: rgba(26, 26, 26, 0.72);
  font-size: 1.3rem;
  font-weight: bold;

  &:first-child {
    display: none;
  }

  @media ${mq.mobile3_up} {
    font-size: 1.5rem;
  }

  @media ${mq.mobile4_up} {
    font-size: 1.7rem;
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
  text-decoration: none !important;
  color: rgba(26, 26, 26, 0.72);

  @media ${mq.tablet1_up} {
    color: ${colors.kreativBlue}!important;
  }
`

const ActiveLink = createGlobalStyle`
 .activeLink a {
    color: ${colors.kreativBlue};
    font-weight: bold;
 }
`

const NavList = () => {
  const { setNavExpanded } = useContext(NavigationContext)

  return (
    <>
      <ActiveLink />
      <List
        items={['hero', 'projects', 'skills', 'squad']}
        currentClassName="activeLink"
        offset={-300}
      >
        <ListItem>
          <Link href="/#hero" onClick={() => setNavExpanded(false)}>
            Hero
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/#projects" onClick={() => setNavExpanded(false)}>
            Projects
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/#skills" onClick={() => setNavExpanded(false)}>
            Skills
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/#squad" onClick={() => setNavExpanded(false)}>
            Squad
          </Link>
        </ListItem>

        <ListItem onClick={() => setNavExpanded(false)}>
          hey@carebykreativ.com
        </ListItem>
      </List>
    </>
  )
}

export default NavList
