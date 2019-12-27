import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import query from '../../styles/breakpoints'
import Skill from './skill'
import arc from '../../images/arc.svg'

const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 60px;
  padding: 20px 15px 0;

  @media ${query.tablet3_up} {
    bottom: 100px;
    height: 850px;
  }
`

const Title = styled.h1`
  margin: 0 0 40px;
  text-align: center;
  font-weight: normal;
  line-height: 2.4rem;
  font-size: 1.8rem;

  @media ${query.mobile3_up} {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media ${query.tablet3_up} {
    font-size: 3.2rem;
  }
`

const SkillsContainer = styled.div`
  @media ${query.tablet3_up} {
    position: absolute;
    left: 50%;
    top: 150px;
    transform: translateX(-60%);
  }
`

const Arc = styled.img`
  display: none;

  @media ${query.tablet3_up} {
    display: block;
    position: absolute;
    top: 105px;
    left: 83px;
    height: calc(100% - 190px);
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
        <Arc src={arc} alt="arc" />

        {skillsData.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </SkillsContainer>
    </SkillsSection>
  )
}
export default Skills
