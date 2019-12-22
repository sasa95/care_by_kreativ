import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CircleBorder from '../circle-border'
import useMounted from '../../hooks/useMounted'

const TextContainer = styled.div`
  width: 33.33%;
`

const ImagesContainer = styled.div`
  width: 66.67%;
`

const Name = styled.h2`
  position: relative;
  font-size: 1.4rem;
  margin-bottom: 5px;
  transition-duration: 0.7s;
  left: ${({ left }) => left};
  transition-property: ${({ transition }) => transition};
  opacity: ${({ opacity }) => opacity};
`
const Title = styled.h3`
  position: relative;
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  color: #5a5a5a;
  transition-duration: 0.7s;
  left: ${({ left }) => left};
  transition-property: ${({ transition }) => transition};
  transition-delay: 0.1s;
  opacity: ${({ opacity }) => opacity};
`
const Subtitle = styled.h4`
  position: relative;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
  color: #6c6c6c;
  transition-duration: 0.7s;
  left: ${({ left }) => left};
  transition-property: ${({ transition }) => transition};
  transition-delay: 0.2s;
  opacity: ${({ opacity }) => opacity};
`

const ImageContainer = styled.div`
  position: absolute;
  right: 45px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 30px 0;
`

const Image = styled.img`
  width: 300px;
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.7s;
  transition-delay: 0.4s;
`

const Overlay = styled.div`
  position: absolute;
  width: 300px;
  padding-bottom: 300px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? '24%' : 0)};
  transition: opacity 0.7s;
  transition-delay: 0.3s;
`

const BorderInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.7s;
  transition-delay: 0.2s;
`

const BorderOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.7s;
  transition-delay: 0.1s;
`

const ProjectItemLG = ({ selectedProject }) => {
  const [image, setImage] = useState()
  const [transition, setTransition] = useState('none')
  const [opacity, setOpacity] = useState(1)
  const [left, setLeft] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  const isMounted = useMounted()
  const url = require.context('../../images/', true)

  useEffect(() => {
    let interval

    if (!isMounted) {
      interval = setInterval(() => {
        console.log('run')
      }, 1000)
      setCurrentProject(selectedProject)
      setImage(url('./' + selectedProject.images[0]))
    } else {
      setTransition('opacity')
      setOpacity(0)

      setTimeout(() => {
        setLeft('-500px')
      }, 700)

      setTimeout(() => {
        setCurrentProject(selectedProject)
        setImage(url('./' + selectedProject.images[0]))
      }, 1400)

      setTimeout(() => {
        setOpacity(1)
        setTransition('left')
        setLeft(0)
        interval = setInterval(() => {
          console.log('run')
        }, 1000)
      }, 1500)
    }

    return () => {
      console.log('cleanup')
      clearInterval(interval)
    }
  }, [selectedProject])

  return (
    <>
      <TextContainer>
        <Name opacity={opacity} transition={transition} left={left}>
          {currentProject.name}
        </Name>
        <Title opacity={opacity} transition={transition} left={left}>
          {currentProject.title}
        </Title>
        <Subtitle opacity={opacity} transition={transition} left={left}>
          {currentProject.subtitle}
        </Subtitle>
      </TextContainer>

      <ImagesContainer>
        <ImageContainer>
          <Image src={image} opacity={opacity} />
          <Overlay color={currentProject.color} opacity={opacity} />
          <BorderInnerContainer opacity={opacity}>
            <CircleBorder color={currentProject.color} />
          </BorderInnerContainer>
          <BorderOuterContainer opacity={opacity}>
            <CircleBorder />
          </BorderOuterContainer>
        </ImageContainer>
      </ImagesContainer>
    </>
  )
}

export default ProjectItemLG
