import React, { useEffect, useContext } from 'react'
import Head from '@components/head'
import Hero from '@components/home/hero/hero'
import Projects from '@components/home/projects/projects'
import Skills from '@components/home/skills/skills'
import Team from '@components/home/team/team'
import ContactInfo from '@components/home/contact-info'
import MainContext from '@context/main-context'

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
