import React from 'react'
import styled from 'styled-components'
import mq from '@styles/media-queries'

const MemberContainer = styled.div`
  margin-bottom: 40px;

  @media ${mq.tablet3_up} {
    &:nth-of-type(2) {
      position: relative;
      top: -50px;
    }
  }
`

const Name = styled.h2`
  font-size: 1.4rem;
`

const Image = styled.img`
  width: 60%;
  max-width: 250px;
  margin: auto;
`

const Job = styled.h3`
  margin: 10px 0;
  font-size: 1.1rem;
  color: #5a5a5a;
`
const Skill = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.5rem;
  color: #6c6c6c;
`

const TeamMember = ({ member: { name, job, skill, image } }) => {
  return (
    <MemberContainer>
      <Name>{name}</Name>
      <Image src={image} alt={name} />
      <Job>{job}</Job>
      <Skill>
        Special skill: <br />
        {skill}
      </Skill>
    </MemberContainer>
  )
}

export default TeamMember
