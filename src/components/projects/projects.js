import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProjectsSM from './projects-sm'
import ProjectsLG from './projects-lg'
import { useMediaQuery } from 'react-responsive'
import query from '../../styles/breakpoints'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            title
            subtitle
            images
            color
            slug
          }
        }
      }
    }
  `)

  const url = require.context('../../images/', true)

  const projects = data.allProjectsJson.edges
    .map(p => p.node)
    .map(project => {
      return {
        ...project,
        images: project.images.map(image => url('./' + image)),
      }
    })
  const isMobile = useMediaQuery({ query: query.tablet3_down })

  return (
    <>
      {isMobile ? (
        <ProjectsSM projects={projects} />
      ) : (
        <ProjectsLG projects={projects} />
      )}
    </>
  )
}

export default Projects
