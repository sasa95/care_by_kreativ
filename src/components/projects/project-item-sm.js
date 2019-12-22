import React from 'react'
import styled from 'styled-components'
import CircleBorder from '../circle-border'

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
`

const Name = styled.h2`
  font-size: 1.4rem;
`
const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #5a5a5a;
`
const Subtitle = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
  color: #6c6c6c;
`

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 30px 0;
`

const Image = styled.img`
  width: 60%;
  max-width: 400px;
  border-radius: 50%;
`

const Overlay = styled.div`
  position: absolute;
  width: 60%;
  padding-bottom: 60%;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 24%;
`

const BorderInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  max-width: 410px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const BorderOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  max-width: 430px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ProjectItemSM = ({
  project: { name, images, color, title, subtitle },
}) => {
  return (
    <Project>
      <Name>{name}</Name>
      <ImageContainer>
        <Image src={images[0]} />
        <Overlay color={color} />
        <BorderInnerContainer>
          <CircleBorder color={color} />
        </BorderInnerContainer>
        <BorderOuterContainer>
          <CircleBorder />
        </BorderOuterContainer>
      </ImageContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Project>
  )
}

export default ProjectItemSM
