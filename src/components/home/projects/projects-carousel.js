import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import CircleBorder from '@components/circle-border'
import useMounted from '@helpers/useMounted'
import gsap from 'gsap/gsap-core'

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
`
const Subtitle = styled.h4`
  position: relative;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
  color: #6c6c6c;
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
`

const OverlayPrimary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 330px;
  padding-bottom: 330px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.24;
  z-index: 10;

  &:hover {
    cursor: pointer;
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
`

const OverlaySecondary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 155px;
  padding-bottom: 155px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.24;
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
`

const OverlayTertiary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 125px;
  padding-bottom: 125px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.24;
`

const ProjectsCarousel = ({ selectedProject }) => {
  const [currentProject, setCurrentProject] = useState()
  const isMounted = useMounted()
  const textRefs = []
  const imgRefs = []
  const tl = gsap.timeline()

  useEffect(() => {
    if (!isMounted) {
      setCurrentProject(selectedProject)
    } else {
      tl.to(textRefs, {
        duration: 0.1,
        stagger: 0.05,
        alpha: 0,
      })

      tl.to(textRefs, {
        duration: 0.1,
        left: '-500px',
      })

      tl.to(
        imgRefs.reverse(),
        {
          duration: 0.3,
          stagger: 0.1,
          alpha: 0,
          onComplete: () => {
            setCurrentProject(selectedProject)
          },
        },
        0
      )
    }

    return () => {}
  }, [selectedProject])

  useEffect(() => {
    if (currentProject) {
      tl.set(textRefs, { alpha: 1 })

      tl.to(textRefs, {
        duration: 0.2,
        stagger: 0.1,
        left: 0,
      })

      tl.to(
        imgRefs,
        {
          duration: 0.3,
          stagger: 0.1,
          alpha: 1,
        },
        0
      )
    }
  }, [currentProject])

  return currentProject ? (
    <>
      <TextContainer>
        <Name ref={e => e && textRefs.push(e)}>
          <AniLink
            paintDrip
            hex={currentProject.color}
            to={`/projects/${currentProject.slug}`}
          >
            {currentProject.name}
          </AniLink>
        </Name>
        <Title ref={e => e && textRefs.push(e)}>{currentProject.title}</Title>
        <Subtitle ref={e => e && textRefs.push(e)}>
          {currentProject.subtitle}
        </Subtitle>
      </TextContainer>

      <ImagesContainer>
        <ImageContainerPrimary>
          <AniLink
            paintDrip
            hex={currentProject.color}
            to={`/projects/${currentProject.slug}`}
            aria-label={`Learn more about ${currentProject.name} project`}
          >
            <div ref={e => e && imgRefs.push(e)}>
              <ImagePrimary fluid={currentProject.images[0]} />

              <OverlayPrimary color={currentProject.color} />
            </div>
            <BorderInnerContainer>
              <CircleBorder color={currentProject.color} />
            </BorderInnerContainer>
            <BorderOuterContainer>
              <CircleBorder />
            </BorderOuterContainer>
          </AniLink>
        </ImageContainerPrimary>
        <ImageContainerSecondary ref={e => e && imgRefs.push(e)}>
          <ImageSecondary fluid={currentProject.images[1]} />
          <OverlaySecondary color={currentProject.color} />
        </ImageContainerSecondary>
        <ImageContainerTertiary ref={e => e && imgRefs.push(e)}>
          <ImageTertiary
            fluid={currentProject.images[2]}
            ref={e => e && imgRefs.push(e.imageRef.current)}
          />

          <OverlayTertiary color={currentProject.color} />
        </ImageContainerTertiary>
      </ImagesContainer>
    </>
  ) : (
    <></>
  )
}

export default ProjectsCarousel
