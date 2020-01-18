import React from 'react'
import styled from 'styled-components'
import CircleBorder from '@components/circle-border'
import mq from '@styles/media-queries'

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;
  max-width: 400px;
  margin: 40px auto 0;

  @media ${mq.tablet3_up} {
    &:nth-of-type(1) {
      margin-top: 0;
    }

    &:not(:nth-of-type(1)) {
      margin-top: 120px;
    }

    &:nth-of-type(2) {
      position: relative;
      left: 81px;
    }
  }
`

const IconContainer = styled.div`
  position: relative;
  align-self: center;
  width: 70px;

  @media ${mq.tablet3_up} {
    width: 120px;
    height: 120px;
    margin-right: 36px;
    background: #fff;
  }
`

const TextContainer = styled.div`
  width: 173px;

  @media ${mq.mobile2_up} {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35px;

  @media ${mq.tablet3_up} {
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
  font-size: 1.05rem;
  line-height: 1.5rem;

  @media ${mq.mobile2_up} {
    font-size: 1.1rem;
  }
`

const Word = styled.span`
  display: none;

  @media ${mq.tablet3_up} {
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
