import React, { useContext, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Head from '@components/head'
import mq from '@styles/media-queries'
import MainContext from '@context/main-context'
import { Container } from '@styles/shared'
import colors from '@styles/colors'
import ProjectNav from '@components/project/project-nav'
import ProjectPagination from '@components/project/project-pagination'

const ProjectInfo = styled.section`
  ${Container};
  padding-top: 90px;

  @media ${mq.mobile3_up} {
    padding-top: 95px;
  }
`

const Name = styled.h1`
  margin: 0 0 10px;
  text-align: center;
  font-weight: normal;
  line-height: 2.4rem;
  font-size: 1.8rem;

  @media ${mq.mobile3_up} {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media ${mq.tablet3_up} {
    font-size: 3.2rem;
    margin-bottom: 20px;
  }
`
const Type = styled.h2`
  margin: 0 0 40px;
  font-size: 1.4rem;
  text-align: center;
`

const Subsection = styled.section`
  margin-bottom: 20px;
  padding-top: 20px;
`

const SectionTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: ${({ color }) => color};
`

const SectionText = styled.p`
  margin: 0 0 30px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: normal;
  color: #6c6c6c;
`

const Image = styled.img`
  display: block;
  width: 100%;
`

const Row2Col = styled.div`
  * {
    display: inline-block;
    width: 50%;
  }
`

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            slug
            title
            subtitle
            color
            type
            text {
              overview
              problem
              solution
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
  }
`

const ProjectTemplate = ({ data, location }) => {
  const { setPathname, siteLoaded, setSiteLoaded } = useContext(MainContext)
  const projectData = data.allSitePage.edges[0].node.context
  const allProjects = data.allProjects.edges.map(project => project.node)
  const [prevProject, setPrevProject] = useState()
  const [nextProject, setNextProject] = useState()

  const setPagination = () => {
    const index = allProjects.findIndex(
      project => project.slug === projectData.slug
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
      <ProjectInfo>
        <ProjectNav />

        <div id="project-overview" style={{ paddingTop: '5px' }}>
          <Name>{projectData.name}</Name>
          <Type>{projectData.type}</Type>

          <Subsection>
            <SectionTitle color={colors.kreativRed}>Overview</SectionTitle>
            <SectionText>{projectData.text.overview}</SectionText>

            <div>
              <Image
                src="https://cdn.dribbble.com/users/4189231/screenshots/9438894/media/adfdb96cf0f764dca09cab6eeb568853.png"
                alt=""
              />
              <Row2Col>
                <Image
                  src="https://cdn.dribbble.com/users/3061865/screenshots/9447536/media/0ffdde94e60e7893c064211afa932702.jpg"
                  alt=""
                />
                <Image
                  src="https://cdn.dribbble.com/users/1081436/screenshots/9438925/media/464bd3cb01d92558cab7fc305cd08d31.png"
                  alt=""
                />
              </Row2Col>
            </div>
          </Subsection>
        </div>

        <Subsection id="project-problem">
          <SectionTitle color={colors.kreativOrange}>Problem</SectionTitle>
          <SectionText>{projectData.text.problem}</SectionText>
          <div>
            <Image
              src="https://cdn.dribbble.com/users/4189231/screenshots/9438894/media/adfdb96cf0f764dca09cab6eeb568853.png"
              alt=""
            />
            <Row2Col>
              <Image
                src="https://cdn.dribbble.com/users/3061865/screenshots/9447536/media/0ffdde94e60e7893c064211afa932702.jpg"
                alt=""
              />
              <Image
                src="https://cdn.dribbble.com/users/1081436/screenshots/9438925/media/464bd3cb01d92558cab7fc305cd08d31.png"
                alt=""
              />
            </Row2Col>
          </div>
        </Subsection>

        <Subsection id="project-solution">
          <SectionTitle color={colors.kreativViolet}>Solution</SectionTitle>
          <SectionText>{projectData.text.solution}</SectionText>

          <div>
            <Image
              src="https://cdn.dribbble.com/users/4189231/screenshots/9438894/media/adfdb96cf0f764dca09cab6eeb568853.png"
              alt=""
            />
            <Row2Col>
              <Image
                src="https://cdn.dribbble.com/users/3061865/screenshots/9447536/media/0ffdde94e60e7893c064211afa932702.jpg"
                alt=""
              />
              <Image
                src="https://cdn.dribbble.com/users/1081436/screenshots/9438925/media/464bd3cb01d92558cab7fc305cd08d31.png"
                alt=""
              />
            </Row2Col>
          </div>
        </Subsection>
      </ProjectInfo>

      <ProjectPagination prev={prevProject} next={nextProject} />
    </>
  )
}

export default ProjectTemplate
