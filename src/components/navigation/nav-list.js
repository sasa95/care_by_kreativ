import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useMediaQuery } from 'react-responsive'
import mq from '@styles/media-queries'
import colors from '@styles/colors'

const List = styled.ul`
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
  color: ${colors.kreativBlue};
  font-size: 1rem;
  font-weight: 400;
`

const ActiveLink = createGlobalStyle`
 .activeRoute {
    color: ${colors.kreativBlue};
    font-weight: bold;
 }
`

const NavList = () => {
  const isTablet = useMediaQuery({
    query: mq.tablet1_up,
  })

  return (
    <>
      <ActiveLink />
      <List>
        <ListItem>
          <AniLink
            cover
            direction="left"
            bg={colors.kreativCyan}
            to="/contact"
            activeClassName="activeRoute"
          >
            {isTablet ? 'hey@carebykreativ.com' : 'Say Hi'}
          </AniLink>
        </ListItem>
      </List>
    </>
  )
}

export default NavList
