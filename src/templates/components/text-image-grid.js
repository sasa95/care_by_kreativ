import React from 'react'
import styled from 'styled-components'
import mq from '@styles/media-queries'
import Img from 'gatsby-image'

const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;

  @media ${mq.tablet1_up} {
    display: flex;
  }

  @media ${mq.tablet3_up} {
    padding-top: 95px;
    padding-bottom: 60px;
  }
`

const TextImgBox = styled.div`
  position: relative;

  @media ${mq.tablet1_up} {
    flex: 1;
  }
`

const BackgroundImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
`

const OverlayText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  font-weight: normal;
  color: #141414;

  @media ${mq.mobile3_up} {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }

  @media ${mq.mobile4_up} {
    padding-top: 40px;
  }

  @media ${mq.tablet1_up} {
    color: #6c6c6c;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ImageBox = styled.div`
  @media ${mq.tablet1_up} {
    flex: 1;
  }
`

const TextImageGrid = ({ text, textBackground, image }) => {
  return (
    <Container>
      <TextImgBox>
        <BackgroundImage fluid={textBackground} />
        <OverlayText>{text}</OverlayText>
      </TextImgBox>
      <ImageBox>
        <Img fluid={image} />
      </ImageBox>
    </Container>
  )
}
export default TextImageGrid
