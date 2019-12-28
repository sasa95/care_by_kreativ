import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import query from '../../styles/breakpoints'
import TeamMember from './team-member'

const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 60px;
  padding: 20px 15px 0;

  @media ${query.tablet3_up} {
    bottom: 100px;
  }
`

const Title = styled.h1`
  margin: 40px 0 0;
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
    margin-bottom: 20px;
  }
`

const Description = styled.div`
  max-width: 300px;
  margin: auto;
  padding-top: 20px;
  text-align: center;
  line-height: 1.5rem;
  color: rgba(51, 51, 51, 0.72);

  @media ${query.tablet3_up} {
    max-width: 420px;
  }

  p {
    margin: 0;
  }
`

const MembersContainer = styled.div`
  padding-top: 20px;
  text-align: center;

  @media ${query.tablet3_up} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 100px;
  }
`

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
          node {
            name
            job
            skill
            image
          }
        }
      }
    }
  `)

  const [teamData, setTeamData] = useState([])

  useEffect(() => {
    const url = require.context('../../images/', true)

    const team = data.allTeamJson.edges
      .map(p => p.node)
      .map(member => {
        return {
          ...member,
          image: url('./' + member.image),
        }
      })

    setTeamData(team)
  }, [])

  return (
    <TeamSection>
      <Title>Are we even human?</Title>
      <Description>
        <p>Take a good look at these faces. Remember them.</p>
        <p>They will take the rest worries off your shoulders.</p>
      </Description>

      <MembersContainer>
        {teamData.map((member, i) => (
          <TeamMember key={i} member={member} />
        ))}
      </MembersContainer>
    </TeamSection>
  )
}
export default Team
