import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Head from '../components/head'
import mq from '../styles/media-queries'
import MainContext from '../context/main-context'

const Project = styled.section`
  padding-top: 70px;
  height: 100vh;

  @media ${mq.mobile3_up} {
    padding-top: 86px;
  }
`

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data, location }) => {
  const { setPathname, siteLoaded, setSiteLoaded } = useContext(MainContext)

  useEffect(() => {
    setPathname(location.pathname)

    if (!siteLoaded) {
      setSiteLoaded(true)
    }
  }, [])

  return (
    <>
      <Head title="Projects" />
      <Project>
        <h1>{data.allSitePage.edges[0].node.context.name}</h1>
      </Project>
    </>
  )
}

export default ProjectTemplate
