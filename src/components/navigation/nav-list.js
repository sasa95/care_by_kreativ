import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Scrollspy from 'react-scrollspy'
import mq from '../../styles/media-queries'
import colors from '../../styles/colors'
import NavigationContext from '../../context/navigation-context'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import { useMediaQuery } from 'react-responsive'

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

  /* &:first-child {
    display: none;
  } */

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
  const { setNavExpanded } = useContext(NavigationContext)

  const isTablet = useMediaQuery({
    query: mq.tablet1_up,
  })

  return (
    <>
      <ActiveLink />
      <List
        items={['hero', 'projects', 'skills', 'squad', 'contact']}
        currentClassName="activeLink"
        offset={-300}
      >
        <Location>
          {({ location: { pathname } }) => {
            if (pathname === '/') {
              return (
                <>
                  <ListItem hide="true">
                    <InternalLink
                      href="/#hero"
                      onClick={() => setNavExpanded(false)}
                    >
                      Hero
                    </InternalLink>
                  </ListItem>

                  <ListItem>
                    <InternalLink
                      href="/#projects"
                      onClick={() => setNavExpanded(false)}
                    >
                      Projects
                    </InternalLink>
                  </ListItem>

                  <ListItem>
                    <InternalLink
                      href="/#skills"
                      onClick={() => setNavExpanded(false)}
                    >
                      Skills
                    </InternalLink>
                  </ListItem>

                  <ListItem>
                    <InternalLink
                      href="/#squad"
                      onClick={() => setNavExpanded(false)}
                    >
                      Squad
                    </InternalLink>
                  </ListItem>
                </>
              )
            } else {
              return (
                <ListItem onClick={() => setNavExpanded(false)}>
                  <Link to="/" onClick={() => setNavExpanded(false)}>
                    Home
                  </Link>
                </ListItem>
              )
            }
          }}
        </Location>

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
