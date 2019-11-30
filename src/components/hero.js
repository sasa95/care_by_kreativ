import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import colors from '../styles/colors'
import query from '../styles/breakpoints'

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 221px;
  height: 100%;
  color: ${colors.kreativBlue};

  @media ${query.mobile3_up} and ${query.portrait} {
    max-width: 252px;
  }

  @media ${query.tablet1_up} and ${query.portrait} {
    max-width: 441px;
  }

  @media ${query.tablet3_down} and ${query.landscape} {
    max-width: 398px;
  }

  @media ${query.tablet3_up} and (max-height: 579px) and ${query.landscape} {
    max-width: 255px;
  }

  @media ${query.tablet3_up} and (min-height: 580px) and ${query.landscape} {
    max-width: 510px;
    position: relative;
    left: -50px;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  font-weight: 300;

  @media ${query.landscape} {
    margin-bottom: 15px;
  }

  @media ${query.mobile3_up} and ${query.portrait} {
    font-size: 4rem;
  }

  @media ${query.tablet1_up} and ${query.portrait},
  ${query.tablet3_up} and  (min-height: 580px) and ${query.landscape} {
    font-size: 7rem;
  }

  strong {
    font-weight: 900;
  }
`

const Subtitle = styled.p`
  margin: 0;
  font-weight: 300;
  align-self: flex-start;
`

const Hero = () => {
  const isLandscape = useMediaQuery({ query: query.landscape })
  const isDesktop = useMediaQuery({ query: query.tablet3_up })

  return (
    <Wrapper>
      <TextContainer>
        <Title>
          <strong>We</strong> (are) <br /> <strong>Care</strong>
          {isLandscape && isDesktop && <br />} by {!isLandscape && <br />}
          Kreativ
        </Title>
        <Subtitle>Filling digital space with love</Subtitle>
      </TextContainer>
    </Wrapper>
  )
}
export default Hero
