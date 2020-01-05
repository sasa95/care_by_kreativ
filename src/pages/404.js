import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import mq from '../styles/media-queries'
import { Container } from '../styles/shared'
import colors from '../styles/colors'

const PageContainer = styled.div`
  ${Container}
  padding-top: 90px;

  @media ${mq.mobile3_up} {
    padding-top: 106px;
  }
`

const NotFoundPage = () => {
  return (
    <>
      <Head title="Page not Found" />
      <PageContainer>
        <h1>404. Not Found!</h1>
      </PageContainer>
    </>
  )
}

export default NotFoundPage
