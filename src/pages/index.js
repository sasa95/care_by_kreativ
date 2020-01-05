import React from 'react'
import Head from '../components/head'
import Hero from '../components/hero'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'
import Team from '../components/team/team'
import ContactInfo from '../components/contact-info'

const HomePage = () => (
  <>
    <Head title="Home" />
    <Hero />
    <Projects />
    <Skills />
    <Team />
    <ContactInfo />
  </>
)

export default HomePage
