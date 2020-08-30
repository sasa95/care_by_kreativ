import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import mq from '@styles/media-queries'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px auto;
  max-width: 800px;
`
const Img = styled.img`
  max-height: 90px;
  margin: auto;

  @media ${mq.mobile3_up} {
    max-height: 100px;
  }

  @media ${mq.mobile4_up} {
    max-height: 130px;
  }

  @media ${mq.tablet1_up} {
    max-height: 150px;
  }
`

const Caption = styled.figcaption`
  text-align: center;
  padding-top: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  color: #5a5a5a;
  white-space: nowrap;
`

const GlobalStyle = createGlobalStyle`
  .alfa-final-logo {
    position: relative;
    top: 10px;
  }
`

const LogoDesign = ({ images, data }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        {data.map((file) => {
          return (
            <figure>
              <Img
                src={images[file.name].publicURL}
                alt={file.caption}
                className={file.class}
              />
              <Caption>{file.caption}</Caption>
            </figure>
          )
        })}
      </Container>
    </>
  )
}
export default LogoDesign
