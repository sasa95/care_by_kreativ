import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Hero from '../components/hero'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'
import Team from '../components/team/team'

const HomePage = () => (
  <>
    <Layout>
      <Head title="Home" />
      <Hero />
      <Projects />
      <Skills />
      <Team />
    </Layout>
  </>
)

export default HomePage
