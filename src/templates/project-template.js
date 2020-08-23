import React, { useContext, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Head from '@components/head'
import mq from '@styles/media-queries'
import MainContext from '@context/main-context'
import { Container } from '@styles/shared'
import ProjectPagination from '@components/project-pagination'
import Intro from './components/intro'
import Logo from './components/logo'
import LogoDesign from './components/logo-design'
import TextBlock from './components/text-block'
import TextImageGrid from './components/text-image-grid'

const Section = styled.section`
  ${Container};
  padding-top: 40px;
  padding-bottom: 20px;

  @media ${mq.tablet3_up} {
    padding-top: 95px;
    padding-bottom: 60px;
  }
`

export const query = graphql`
  query($path: String!, $imagesPath: String!, $logoPath: String!) {
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
                    background {
                      image {
                        name
                      }
                    }
                  }
                  images {
                    name
                    caption
                  }
                  image {
                    name
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
          extension
          publicURL
          name
        }
      }
    }

    logos: allFile(filter: { relativeDirectory: { eq: $logoPath } }) {
      edges {
        node {
          extension
          publicURL
          name
        }
      }
    }
  }
`

const ProjectTemplate = ({ data, location }) => {
  const { setPathname, siteLoaded, setSiteLoaded } = useContext(MainContext)
  const projectData = data.allSitePage.edges[0].node.context.item

  const allProjects = data.allProjects.edges.map((project) => project.node)
  const [prevProject, setPrevProject] = useState()
  const [nextProject, setNextProject] = useState()

  const logos = data.logos.edges.reduce(function (acc, cur, i) {
    acc[cur.node.name] = cur.node
    return acc
  }, {})

  const images = data.images.edges.reduce(function (acc, cur, i) {
    acc[cur.node.name] = cur.node
    return acc
  }, {})

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

      {projectData.postContent.map((el) => {
        switch (el.type) {
          case 'fluidImage':
            return (
              <Img
                fluid={images[el.content.image.name].childImageSharp.fluid}
              />
            )
          case 'intro':
            return (
              <Section>
                <Intro content={el.content} />
              </Section>
            )
          case 'logo-design':
            return <LogoDesign images={logos} data={el.content.images} />
          case 'logo':
            return (
              <Logo src={logos[el.content.image.name].publicURL} alt="Logo" />
            )
          case 'textBlock':
            return (
              <Section>
                <TextBlock text={el.content.text} />
              </Section>
            )
          case 'textImageGrid':
            return (
              <TextImageGrid
                text={el.content.text[0].content}
                textBackground={
                  images[el.content.text[0].background.image.name]
                    .childImageSharp.fluid
                }
                image={images[el.content.image.name].childImageSharp.fluid}
              />
            )
          default:
            return undefined
        }
      })}

      <ProjectPagination prev={prevProject} next={nextProject} />
    </>
  )
}

export default ProjectTemplate
