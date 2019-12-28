import React from 'react'
import ProjectItemSM from './project-item-sm'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  to {opacity: 1}
`

const Projects = styled.section`
  position: relative;
  bottom: 60px;
  margin-bottom: -60px;
  padding: 0 15px;
  opacity: 0;
  animation: ${fadeIn} 2s forwards;
  animation-play-state: ${({ animation }) => animation};
`

const ProjectsSM = ({ projects, animationPlayState }) => (
  <Projects animation={animationPlayState}>
    {projects.map((project, i) => (
      <ProjectItemSM key={i} project={project} />
    ))}
  </Projects>
)

export default ProjectsSM
