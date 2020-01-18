import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import ProjectsCarousel from './projects-carousel'
import { Container } from '../../../styles/shared'

const grow = keyframes`
  to { width: 100% }
`

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

  &:after {
    ${({ i, a, color }) =>
      i === a &&
      css`
        position: absolute;
        display: block;
        width: 0;
        height: 5px;
        border-radius: 10px;
        background: ${color};
        content: '';
      `};
    animation: 6s ${grow} 0.8s linear;
  }
`

const ProjectsContainerLG = ({ projects, image }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  useEffect(() => {
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
      clearTimeout(timeout)
    }
  }, [selectedProjectIndex])

  const changeProject = index => {
    setSelectedProjectIndex(index)
  }

  return (
    <Projects id="projects">
      <ProjectsCarousel
        fancyImage={image}
        selectedProject={projects[selectedProjectIndex]}
      />

      <IndicatorsContainer>
        {projects.map((project, i) => (
          <Indicator
            onClick={() => changeProject(i)}
            key={i}
            i={i}
            a={selectedProjectIndex}
            color={project.color}
          />
        ))}
      </IndicatorsContainer>
    </Projects>
  )
}

export default ProjectsContainerLG