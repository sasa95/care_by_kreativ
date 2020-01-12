import React, { useContext } from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
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
    top: 150px;
    bottom: 0;
    left: 50px;
    height: 350px;
    margin: auto;
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
  color: rgba(51, 51, 51, 0.72);
`

const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`

const IconStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`

const LinkText = styled.span`
  display: inline-block;
  margin-top: 10px;
`

const ActiveLink = createGlobalStyle`
 .active-project-link:first-child {
   path {
    fill: ${colors.kreativRed};
   }

   circle {
     stroke: ${colors.kreativRed};
   }
 }

 .active-project-link:nth-child(2) {
   path {
    fill: ${colors.kreativOrange};
   }

   circle {
     stroke: ${colors.kreativOrange};
   }
 }

 .active-project-link:last-child {
   path {
    fill: ${colors.kreativViolet};
   }

   circle {
     stroke: ${colors.kreativViolet};
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
        offset={-70}
      >
        <ListItem>
          <ImageContainer>
            <a href={`${pathname}#project-overview`}>
              <OverviewIcon css={IconStyles} />
              <CircleBorder />
            </a>
          </ImageContainer>
          <a href={`${pathname}#project-overview`}>
            <LinkText>Overview</LinkText>
          </a>
        </ListItem>

        <ListItem>
          <ImageContainer>
            <a href={`${pathname}#project-problem`}>
              <ProblemIcon css={IconStyles} />
              <CircleBorder />
            </a>
          </ImageContainer>
          <a href={`${pathname}#project-problem`}>
            <LinkText>Problem</LinkText>
          </a>
        </ListItem>

        <ListItem>
          <ImageContainer>
            <a href={`${pathname}#project-solution`}>
              <SolutionIcon css={IconStyles} />
              <CircleBorder />
            </a>
          </ImageContainer>
          <a href={`${pathname}#project-solution`}>
            <LinkText>Solution</LinkText>
          </a>
        </ListItem>
      </List>
    </Nav>
  )
}
export default ProjectNav
