import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import { Container } from '@styles/shared'

const Pagination = styled.nav`
  ${Container}
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0 0;
  padding: 0;
  width: 100%;
  list-style: none;
`

const ListItem = styled.li`
  color: #2a52ca;
  text-transform: uppercase;
  font-weight: bold;
`

const ProjectPagination = ({ prev, next }) => {
  return (
    <Pagination>
      <List>
        {prev ? (
          <ListItem>
            <AniLink cover direction="right" to={`/projects/${prev.slug}`}>
              Prev
            </AniLink>
          </ListItem>
        ) : (
          <li></li>
        )}
        {next ? (
          <ListItem>
            <AniLink cover direction="left" to={`/projects/${next.slug}`}>
              Next
            </AniLink>
          </ListItem>
        ) : (
          <li></li>
        )}
      </List>
    </Pagination>
  )
}

export default ProjectPagination
