import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import query from '../../styles/breakpoints'
import Skill from './skill'
import arc from '../../images/arc.svg'

const SkillsSection = styled.section`
  position: relative;
  padding: 20px 15px 0;
  bottom: 120px;

  @media ${query.tablet3_up} {
    height: 100vh;
  }
`

const Title = styled.h1`
  margin: 0 0 40px;
  text-align: center;
  font-weight: normal;
  line-height: 1.8rem;
  font-size: 1.6rem;

  @media ${query.tablet3_up} {
    font-size: 3.5rem;
  }
`

const SkillsContainer = styled.div`
  @media ${query.tablet3_up} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: blue;
  }
`

const Arc = styled.img`
  display: none;

  @media ${query.tablet3_up} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        edges {
          node {
            title
            description
            word
            color
            icon
          }
        }
      }
    }
  `)

  const [skillsData, setSkillsData] = useState([])

  useEffect(() => {
    const url = require.context('../../images/', true)

    const skills = data.allSkillsJson.edges
      .map(p => p.node)
      .map(skill => {
        return {
          ...skill,
          icon: url('./' + skill.icon),
        }
      })

    setSkillsData(skills)
  }, [])

  return (
    <SkillsSection>
      <Title>What can we offer you?</Title>

      <SkillsContainer>
        {skillsData.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </SkillsContainer>
    </SkillsSection>
  )
}
export default Skills