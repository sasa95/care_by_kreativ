import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../styles/colors'
import mq from '../styles/media-queries'
import Scrollspy from 'react-scrollspy'
import MainContext from '../context/main-context'

const Nav = styled.div`
  display: none;

  @media ${mq.desktop1_up} {
    display: block;
    position: fixed;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    height: 100px;
    background: yellow;
  }
`

const List = styled(Scrollspy)`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  color: rgba(26, 26, 26, 0.72);
`

const InternalLink = styled.a`
  text-decoration: none !important;
  color: rgba(26, 26, 26, 0.72);
`

const ActiveLink = createGlobalStyle`
 .active-project-link a {
    color: ${colors.kreativRed};
    font-weight: bold;
 }
`

const ProjectNav = () => {
  const { pathname } = useContext(MainContext)

  return (
    <Nav>
      <ActiveLink />
      <List
        items={['project-overview', 'project-problem', 'project-solution']}
        currentClassName="active-project-link"
        offset={-50}
      >
        <ListItem>
          <InternalLink href={`${pathname}#project-overview`}>
            Overview
          </InternalLink>
        </ListItem>

        <ListItem>
          <InternalLink href={`${pathname}#project-problem`}>
            Problem
          </InternalLink>
        </ListItem>

        <ListItem>
          <InternalLink href={`${pathname}#project-solution`}>
            Solution
          </InternalLink>
        </ListItem>
      </List>
    </Nav>
  )
}
export default ProjectNav
