import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import ProjectItemSM from './project-item-sm'
import MainContext from '@context/main-context'

const fadeIn = keyframes`
  to {opacity: 1}
`

const Projects = styled.section`
  position: relative;
  bottom: 60px;
  margin-bottom: -60px;
  padding: 0 15px;
  opacity: ${({ animate }) => (animate ? 0 : 1)};
  animation: ${fadeIn} 2s forwards;
  animation-play-state: ${({ animation }) => animation};
`

const ProjectsContainerSM = ({ projects, animationPlayState }) => {
  const { siteLoaded } = useContext(MainContext)

  return (
    <Projects
      animation={animationPlayState}
      animate={!siteLoaded}
      id="projects"
    >
      {projects.map((project, i) => (
        <ProjectItemSM key={i} project={project} />
      ))}
    </Projects>
  )
}

export default ProjectsContainerSM
