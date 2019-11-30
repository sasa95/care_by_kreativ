import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/hero'

const Test = styled.div`
  height: 100vh;
`

const HomePage = () => (
  <>
    <Layout>
      <Head title="Home" />
      <Hero />
    </Layout>

    <Test>Test section</Test>
  </>
)

export default HomePage
