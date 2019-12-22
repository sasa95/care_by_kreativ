import React, { useEffect, useState } from 'react'
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
  const [animationPlayState, setAnimationPlayState] = useState('paused')

  useEffect(() => {
    setTimeout(() => {
      setAnimationPlayState('running')
    }, 2000)
  }, [])

  return (
    <>
      {isMobile ? (
        <ProjectsSM
          projects={projects}
          animationPlayState={animationPlayState}
        />
      ) : (
        <ProjectsLG projects={projects} />
      )}
    </>
  )
}

export default Projects
