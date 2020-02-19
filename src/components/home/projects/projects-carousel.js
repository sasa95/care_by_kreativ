import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import CircleBorder from '@components/circle-border'
import useMounted from '@helpers/useMounted'

const TextContainer = styled.div`
  width: 33.33%;
`

const ImagesContainer = styled.div`
  width: 66.67%;
`

const Name = styled.h2`
  display: inline-block;
  position: relative;
  font-size: 1.4rem;
  text-decoration: none;
  margin-bottom: 5px;
  transition-duration: 0.3s;
  left: ${({ left }) => left};
  transition-property: ${({ transition }) => transition};
  opacity: ${({ opacity }) => opacity};

  &:hover :after {
    width: 100%;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0%;
    height: 7px;
    background: #cbedf8;
    z-index: -1;
    transition: width 0.3s;
  }
`
const Title = styled.h3`
  position: relative;
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  color: #5a5a5a;
  transition-duration: 0.3s;
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
  transition-duration: 0.3s;
  left: ${({ left }) => left};
  transition-property: ${({ transition }) => transition};
  transition-delay: 0.2s;
  opacity: ${({ opacity }) => opacity};
`

const ImageContainerPrimary = styled.div`
  position: absolute;
  right: 180px;
  top: calc(50% + 27px);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 30px 0;
`

const ImagePrimary = styled(Img)`
  width: 330px;
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s;
  transition-delay: 0.4s;
`

const OverlayPrimary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 330px;
  padding-bottom: 330px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? 0.24 : 0)};
  transition: opacity 0.3s;
  transition-delay: 0.1s;
  z-index: 10;

  &:hover {
    cursor: pointer;
    opacity: 0;
  }
`

const BorderInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s;
  transition-delay: 0.1s;
`

const BorderOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 385px;
  height: 385px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s;
  transition-delay: 0.1s;
`
const ImageContainerSecondary = styled.div`
  position: absolute;
  right: 65px;
  top: calc(50% - 190px);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 30px 0;
`
const ImageSecondary = styled(Img)`
  width: 155px;
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s;
  transition-delay: 0.2s;
`

const OverlaySecondary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 155px;
  padding-bottom: 155px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? 0.24 : 0)};
  transition: opacity 0.3s;
  transition-delay: 0.2s;
`

const ImageContainerTertiary = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 30px 0;
`
const ImageTertiary = styled(Img)`
  width: 125px;
  border-radius: 50%;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.3s;
  transition-delay: 0.3s;
`

const OverlayTertiary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 125px;
  padding-bottom: 125px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: ${({ opacity }) => (opacity ? 0.24 : 0)};
  transition: opacity 0.3s;
  transition-delay: 0.3s;
`

const ProjectsCarousel = ({ selectedProject }) => {
  const [transition, setTransition] = useState('none')
  const [opacity, setOpacity] = useState(1)
  const [left, setLeft] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  const isMounted = useMounted()

  useEffect(() => {
    let t1
    let t2
    let t3

    if (!isMounted) {
      setCurrentProject(selectedProject)
    } else {
      setTransition('opacity')
      setOpacity(0)

      t1 = setTimeout(() => {
        setLeft('-500px')
      }, 510)

      t2 = setTimeout(() => {
        setCurrentProject(selectedProject)
      }, 650)

      t3 = setTimeout(() => {
        setOpacity(1)
        setTransition('left')
        setLeft(0)
      }, 800)
    }

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [selectedProject])

  return currentProject ? (
    <>
      <TextContainer>
        <Name opacity={opacity} transition={transition} left={left}>
          <AniLink
            paintDrip
            hex={currentProject.color}
            to={`/projects/${currentProject.slug}`}
          >
            {currentProject.name}
          </AniLink>
        </Name>
        <Title opacity={opacity} transition={transition} left={left}>
          {currentProject.title}
        </Title>
        <Subtitle opacity={opacity} transition={transition} left={left}>
          {currentProject.subtitle}
        </Subtitle>
      </TextContainer>

      <ImagesContainer>
        <ImageContainerPrimary>
          <AniLink
            paintDrip
            hex={currentProject.color}
            to={`/projects/${currentProject.slug}`}
          >
            <ImagePrimary fluid={currentProject.images[0]} opacity={opacity} />
            <OverlayPrimary color={currentProject.color} opacity={opacity} />
            <BorderInnerContainer opacity={opacity}>
              <CircleBorder color={currentProject.color} />
            </BorderInnerContainer>
            <BorderOuterContainer opacity={opacity}>
              <CircleBorder />
            </BorderOuterContainer>
          </AniLink>
        </ImageContainerPrimary>
        <ImageContainerSecondary>
          <ImageSecondary fluid={currentProject.images[1]} opacity={opacity} />
          <OverlaySecondary color={currentProject.color} opacity={opacity} />
        </ImageContainerSecondary>
        <ImageContainerTertiary>
          <ImageTertiary fluid={currentProject.images[2]} opacity={opacity} />
          <OverlayTertiary color={currentProject.color} opacity={opacity} />
        </ImageContainerTertiary>
      </ImagesContainer>
    </>
  ) : (
    <></>
  )
}

export default ProjectsCarousel
