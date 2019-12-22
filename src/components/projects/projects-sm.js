import React from 'react'
import ProjectItemSM from './project-item-sm'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  to {opacity: 1}
`

const Projects = styled.section`
  position: relative;
  bottom: 120px;
  padding: 0 15px;
  opacity: 0;
  animation: ${fadeIn} 2s 4s forwards;
`

const ProjectsSM = ({ projects }) => (
  <Projects>
    {projects.map((project, i) => (
      <ProjectItemSM key={i} project={project} />
    ))}
  </Projects>
)

export default ProjectsSM
