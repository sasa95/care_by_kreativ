import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Container } from '../../styles/shared'

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
            <Link to={`/projects/${prev.slug}`}>{prev.name}</Link>
          </li>
        )}
        {next && (
          <li>
            <Link to={`/projects/${next.slug}`}>{next.name}</Link>
          </li>
        )}
      </List>
    </Pagination>
  )
}

export default ProjectPagination
