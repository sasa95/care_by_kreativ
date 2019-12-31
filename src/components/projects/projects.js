import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import ProjectsSM from './projects-sm'
import ProjectsLG from './projects-lg'
import mq from '../../styles/media-queries'

const Placeholder = styled.div`
  height: 300px;
  width: 100%;
`

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

  const [animationPlayState, setAnimationPlayState] = useState('paused')
  const [allProjects, setAllProjects] = useState()

  let isMobile = false
  let isDesktop = false

  isMobile = useMediaQuery({ query: mq.tablet3_down })
  isDesktop = useMediaQuery({ query: mq.tablet3_up })

  useEffect(() => {
    const url = require.context('../../images/', true)

    const projects = data.allProjectsJson.edges
      .map(p => p.node)
      .map(project => {
        return {
          ...project,
          images: project.images.map(image => url('./' + image)),
        }
      })

    setAllProjects(projects)

    setTimeout(() => {
      setAnimationPlayState('running')
    }, 2000)
  }, [])

  return (
    <>
      {!allProjects && <Placeholder />}
      {allProjects && isMobile && (
        <ProjectsSM
          projects={allProjects}
          animationPlayState={animationPlayState}
        />
      )}

      {allProjects && isDesktop && <ProjectsLG projects={allProjects} />}
    </>
  )
}

export default Projects
