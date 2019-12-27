import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CircleBorder from '../circle-border'
import query from '../../styles/breakpoints'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
  max-width: 400px;
  margin: 40px auto 0;

  @media ${query.tablet3_up} {
    &:first-child {
      margin-top: 0;
    }

    &:not(:first-child) {
      margin-top: 100px;
    }

    &:nth-child(2) {
      position: relative;
      left: 50px;
    }
  }
`

const IconContainer = styled.div`
  position: relative;
  align-self: center;
  width: 70px;

  @media ${query.tablet3_up} {
    width: 120px;
    margin-right: 50px;
  }
`

const TextContainer = styled.div`
  width: 173px;

  @media ${query.mobile2_up} {
    width: 200px;
  }
`

const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35px;

  @media ${query.tablet3_up} {
    width: 55px;
  }
`

const Circle = styled(CircleBorder)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Title = styled.h3`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 1rem;
  margin: 0 0 10px;
`
const Description = styled.p`
  margin: 0;
  color: rgba(51, 51, 51, 0.72);
  font-size: 1.1rem;
  line-height: 1.5rem;
`

const Word = styled.span`
  display: none;

  @media ${query.tablet3_up} {
    display: block;
    position: absolute;
    left: -60px;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgba(26, 26, 26, 0.3);
    font-weight: bold;
  }
`

const Skill = ({ skill: { title, description, word, color, icon } }) => {
  console.log(title)

  return (
    <SkillContainer>
      <IconContainer>
        <Circle className="Circle" color={color} />
        <Icon src={icon} />
        <Word>{word}</Word>
      </IconContainer>
      <TextContainer>
        <Title color={color}>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </SkillContainer>
  )
}
export default Skill
