import React, { useContext, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Head from '@components/head'
import mq from '@styles/media-queries'
import MainContext from '@context/main-context'
import { Container } from '@styles/shared'
import colors from '@styles/colors'
import ProjectPagination from '@components/project-pagination'
import Heading from './components/heading'
import Paragraph from './components/paragraph'
import Intro from './components/intro'

const ProjectInfo = styled.section`
  ${Container};
  padding-top: 40px;

  @media ${mq.tablet3_up} {
    padding-top: 95px;
  }
`

const Subsection = styled.section`
  margin-bottom: 20px;
  padding-top: 20px;
`

export const query = graphql`
  query($path: String!, $imagesPath: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            item {
              name
              slug
              title
              subtitle
              color
              type
              postContent {
                type
                content {
                  text {
                    type
                    content
                  }
                  deliverables
                }
              }
              text {
                overview
                problem
                solution
              }
            }
          }
        }
      }
    }

    allProjects: allProjectsJson {
      edges {
        node {
          name
          slug
        }
      }
    }

    images: allFile(filter: { relativeDirectory: { eq: $imagesPath } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data, location }) => {
  const { setPathname, siteLoaded, setSiteLoaded } = useContext(MainContext)
  const projectData = data.allSitePage.edges[0].node.context.item

  console.log(projectData)
  const allProjects = data.allProjects.edges.map((project) => project.node)
  const [prevProject, setPrevProject] = useState()
  const [nextProject, setNextProject] = useState()
  const images = data.images.edges.map(
    (project) => project.node.childImageSharp
  )

  const setPagination = () => {
    const index = allProjects.findIndex(
      (project) => project.slug === projectData.slug
    )

    if (index > 0) {
      setPrevProject(allProjects[index - 1])
    }

    if (index < allProjects.length - 1) {
      setNextProject(allProjects[index + 1])
    }

    console.log({ allProjects, index })
  }

  useEffect(() => {
    setPagination()

    setPathname(location.pathname)

    if (!siteLoaded) {
      setSiteLoaded(true)
    }
  }, [])

  return (
    <>
      <Head title="Projects" />
      <Img fluid={images[0].fluid} />

      <ProjectInfo>
        {projectData.postContent.map((el) => {
          switch (el.type) {
            case 'intro':
              return <Intro content={el.content} />
            default:
              return undefined
          }
        })}

        {/* {projectData.postContent.map((el) => {
          let a
          switch (el.type) {
            case 'intro':
              a = `<h1>Ovo je intro</h1>`
              break
            default:
              break
          }

          return a
        })} */}

        <Subsection></Subsection>
      </ProjectInfo>

      <ProjectPagination prev={prevProject} next={nextProject} />
    </>
  )
}

export default ProjectTemplate
