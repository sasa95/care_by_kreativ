import React, { useEffect, useContext } from 'react'
import Head from '../components/head'
import Hero from '../components/hero'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'
import Team from '../components/team/team'
import ContactInfo from '../components/contact-info'
import MainContext from '../context/main-context'

const HomePage = ({ location }) => {
  const { setPathname } = useContext(MainContext)

  useEffect(() => {
    setPathname(location.pathname)
  }, [])

  return (
    <>
      <Head title="Home" />
      <Hero />
      <Projects />
      <Skills />
      <Team />
      <ContactInfo />
    </>
  )
}

export default HomePage
