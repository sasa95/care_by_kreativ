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
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
`

const ProjectPagination = ({ prev, next }) => {
  return (
    <Pagination>
      <List>
        {prev && (
          <li>
            <AniLink cover direction="right" to={`/projects/${prev.slug}`}>
              {prev.name}
            </AniLink>
          </li>
        )}
        {next && (
          <li>
            <AniLink cover direction="left" to={`/projects/${next.slug}`}>
              {next.name}
            </AniLink>
          </li>
        )}
      </List>
    </Pagination>
  )
}

export default ProjectPagination
