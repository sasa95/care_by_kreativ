import React from 'react'
import ProjectItemSM from './project-item-sm'
import styled, { keyframes } from 'styled-components'
import query from '../../styles/breakpoints'

const fadeIn = keyframes`
  to {opacity: 1}
`

const Projects = styled.section`
  position: relative;
  padding: 0 15px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-play-state: ${({ animation }) => animation};

  @media ${query.portrait} {
    bottom: 120px;
  }
`

const ProjectsSM = ({ projects, animationPlayState }) => (
  <Projects animation={animationPlayState}>
    {projects.map((project, i) => (
      <ProjectItemSM key={i} project={project} />
    ))}
  </Projects>
)

export default ProjectsSM
