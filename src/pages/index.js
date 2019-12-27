import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/hero'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'

const HomePage = () => (
  <>
    <Layout>
      <Head title="Home" />
      <Hero />
      <Projects />
      <Skills />
    </Layout>
  </>
)

export default HomePage
