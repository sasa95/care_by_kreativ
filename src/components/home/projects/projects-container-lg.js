import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProjectsCarousel from './projects-carousel'
import { Container } from '@styles/shared'
import gsap from 'gsap'

const Projects = styled.section`
  ${Container}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 100px;
  margin-bottom: -100px;
  height: 600px;
`

const IndicatorsContainer = styled.div`
  position: absolute;
  top: calc(50% + 140px);
  left: 15px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 240px;
`

const Indicator = styled.div`
  position: relative;
  width: 70px;
  height: 5px;
  border-radius: 10px;
  background: rgba(51, 51, 51, 0.1);
  cursor: pointer;
`

const IndicatorProgress = styled.div`
  background: ${({ color }) => color};
  position: absolute;
  width: 0;
  height: 5px;
  border-radius: 10px;
`

const ProjectsContainerLG = ({ projects }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const progressRefs = []

  const changeProject = index => {
    setSelectedProjectIndex(index)
  }

  useEffect(() => {
    const tween = gsap.to(progressRefs[selectedProjectIndex], {
      width: '100%',
      ease: 'none',
      duration: 6,
      delay: 0.8,
    })

    const timeout = setTimeout(() => {
      let newIndex
      if (selectedProjectIndex === projects.length - 1) {
        newIndex = 0
      } else {
        newIndex = selectedProjectIndex + 1
      }
      setSelectedProjectIndex(newIndex)
    }, 7000)
    return () => {
      tween.seek(0)
      tween.kill()
      clearTimeout(timeout)
    }
  }, [selectedProjectIndex])

  return (
    <Projects id="projects">
      <ProjectsCarousel selectedProject={projects[selectedProjectIndex]} />

      <IndicatorsContainer>
        {projects.map((project, i) => (
          <Indicator onClick={() => changeProject(i)} key={i}>
            <IndicatorProgress
              color={project.color}
              ref={e => e && progressRefs.push(e)}
            />
          </Indicator>
        ))}
      </IndicatorsContainer>
    </Projects>
  )
}

export default ProjectsContainerLG
