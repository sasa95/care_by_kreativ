import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import ProjectsContainerSM from './projects-container-sm'
import ProjectsContainerLG from './projects-container-lg'
import mq from '@styles/media-queries'
import { groupBy } from '@helpers/groupBy'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allProjectsJson {
        edges {
          node {
            name
            slug
            title
            subtitle
            color
          }
        }
      }

      images: allFile(
        filter: { relativeDirectory: { regex: "/projects.*thumbnails/" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 330) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
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
    const imagesMapped = data.images.edges.map(
      (image) => image.node.childImageSharp.fluid
    )

    const imagesSorted = imagesMapped.sort((a, b) =>
      a.originalName > b.originalName ? 1 : -1
    )

    const imagesGrouped = groupBy(imagesSorted, (image) => {
      const end = image.originalName.lastIndexOf('_')
      return image.originalName.substring(0, end)
    })

    const projects = data.projects.edges.map((project) => {
      return {
        ...project.node,
        images: imagesGrouped[project.node.slug],
      }
    })

    setAllProjects(projects)
    const t = setTimeout(() => {
      setAnimationPlayState('running')
    }, 2000)

    return () => {
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      {allProjects && isMobile && (
        <ProjectsContainerSM
          projects={allProjects}
          animationPlayState={animationPlayState}
        />
      )}

      {allProjects && isDesktop && (
        <ProjectsContainerLG projects={allProjects} />
      )}
    </>
  )
}

export default Projects
