import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Scrollspy from 'react-scrollspy'
import { useMediaQuery } from 'react-responsive'
import mq from '../../styles/media-queries'
import colors from '../../styles/colors'
import MainContext from '../../context/main-context'
import { Link } from 'gatsby'

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
  display: ${({ hide }) => (hide ? 'none' : 'list-item')};

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

const InternalLink = styled.a`
  text-decoration: none !important;
  color: rgba(26, 26, 26, 0.72);

  @media ${mq.tablet1_up} {
    color: ${colors.kreativBlue}!important;
  }
`

const ActiveLink = createGlobalStyle`
 .activeLink a,
 .activeRoute {
    color: ${colors.kreativBlue};
    font-weight: bold;
 }
`

const NavList = () => {
  const { pathname, setNavExpanded } = useContext(MainContext)
  const internalLinks = ['Hero', 'Projects', 'Skills', 'Squad']

  const isTablet = useMediaQuery({
    query: mq.tablet1_up,
  })

  const generateLinks = path => {
    let generatedLinks = []

    if (path === '/') {
      generatedLinks = internalLinks.map((link, index) => {
        return (
          <ListItem hide={!index ? true : false} key={index}>
            <InternalLink
              href={`/#${link.toLowerCase()}`}
              onClick={() => setNavExpanded(false)}
            >
              {link}
            </InternalLink>
          </ListItem>
        )
      })
    } else {
      const homeLink = (
        <ListItem key="home" onClick={() => setNavExpanded(false)}>
          <Link to="/" onClick={() => setNavExpanded(false)}>
            Home
          </Link>
        </ListItem>
      )

      generatedLinks.push(homeLink)
    }

    return [generatedLinks]
  }

  return (
    <>
      <ActiveLink />
      <List
        items={['hero', 'projects', 'skills', 'squad', 'contact']}
        currentClassName="activeLink"
        offset={-100}
      >
        {generateLinks(pathname)}

        <ListItem onClick={() => setNavExpanded(false)}>
          <Link
            to="/contact"
            activeClassName="activeRoute"
            onClick={() => setNavExpanded(false)}
          >
            {isTablet ? 'hey@carebykreativ.com' : 'Say Hi'}
          </Link>
        </ListItem>
      </List>
    </>
  )
}

export default NavList
