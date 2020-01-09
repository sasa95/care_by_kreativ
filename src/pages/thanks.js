import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import mq from '../styles/media-queries'
import { Container } from '../styles/shared'
import colors from '../styles/colors'
import MainContext from '../context/main-context'

const PageContainer = styled.div`
  ${Container}
  padding-top: 90px;

  @media ${mq.mobile3_up} {
    padding-top: 106px;
  }
`

const ThanksPage = ({ location }) => {
  const { setPathname, siteLoaded, setSiteLoaded } = useContext(MainContext)

  useEffect(() => {
    setPathname(location.pathname)

    if (!siteLoaded) {
      setSiteLoaded(true)
    }
  }, [])
  return (
    <>
      <Head title="Contact" />
      <PageContainer>
        <h1>Thanks!</h1>
      </PageContainer>
    </>
  )
}

export default ThanksPage
