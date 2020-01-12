import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../../styles/colors'
import mq from '../../styles/media-queries'
import Scrollspy from 'react-scrollspy'
import MainContext from '../../context/main-context'
import OverviewIcon from './overview-icon'
import ProblemIcon from './problem-icon'
import SolutionIcon from './solution-icon'
import CircleBorder from '../circle-border'

const Nav = styled.nav`
  display: none;

  @media ${mq.desktop1_up} {
    display: block;
    position: fixed;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    height: 400px;
  }
`

const List = styled(Scrollspy)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(26, 26, 26, 0.72);
`

const InternalLink = styled.a`
  text-decoration: none !important;
  color: rgba(26, 26, 26, 0.72);
`

const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`

const OverviewNavIcon = styled(OverviewIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`

const ProblemNavIcon = styled(ProblemIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`

const SolutionNavIcon = styled(SolutionIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`

const LinkText = styled.span`
  display: inline-block;
  margin-top: 10px;
`

const ActiveLink = createGlobalStyle`
 .active-project-link {
   path {
    fill: ${colors.kreativRed};
    fill-opacity: 1;
   }

   circle {
     stroke: ${colors.kreativRed};
   }
 }
`

const ProjectNav = () => {
  const { pathname } = useContext(MainContext)

  return (
    <Nav>
      <ActiveLink />
      <List
        items={['project-overview', 'project-problem', 'project-solution']}
        currentClassName="active-project-link"
        offset={-50}
      >
        <ListItem>
          <ImageContainer>
            <InternalLink href={`${pathname}#project-overview`}>
              <OverviewNavIcon className="OverviewNavIcon" />
              <CircleBorder />
            </InternalLink>
          </ImageContainer>
          <InternalLink href={`${pathname}#project-overview`}>
            <LinkText>Overview</LinkText>
          </InternalLink>
        </ListItem>

        <ListItem>
          <ImageContainer>
            <InternalLink href={`${pathname}#project-problem`}>
              <ProblemNavIcon className="ProblemNavIcon" />
              <CircleBorder />
            </InternalLink>
          </ImageContainer>
          <InternalLink href={`${pathname}#project-problem`}>
            <LinkText>Problem</LinkText>
          </InternalLink>
        </ListItem>

        <ListItem>
          <ImageContainer>
            <InternalLink href={`${pathname}#project-solution`}>
              <SolutionNavIcon className="SolutionNavIcon" />
              <CircleBorder />
            </InternalLink>
          </ImageContainer>
          <InternalLink href={`${pathname}#project-solution`}>
            <LinkText>Solution</LinkText>
          </InternalLink>
        </ListItem>
      </List>
    </Nav>
  )
}
export default ProjectNav
