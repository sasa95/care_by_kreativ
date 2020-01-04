import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Head from '../components/head'
import mq from '../styles/media-queries'

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

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <Head title="Projects" />
      <Project>
        <h1>{data.allSitePage.edges[0].node.context.name}</h1>
      </Project>
    </Layout>
  )
}

export default ProjectTemplate
