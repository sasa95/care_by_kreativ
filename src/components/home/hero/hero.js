import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import colors from '../../../styles/colors'
import mq from '../../../styles/media-queries'
import HeroBubblesSlow from './hero-bubbles-slow'
import HeroBubblesFast from './hero-bubbles-fast'
import MainContext from '../../../context/main-context'

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
  width: 100%;
  max-width: 227px;
  height: 100%;
  color: ${colors.kreativBlue};

  @media ${mq.mobile3_up} and ${mq.portrait} {
    max-width: 257px;
  }

  @media ${mq.tablet1_up} and ${mq.portrait} {
    max-width: 449px;
  }

  @media ${mq.tablet3_down} and ${mq.landscape} {
    max-width: 446px;
  }

  @media ${mq.tablet3_up} and (max-height: 579px) and ${mq.landscape} {
    max-width: 340px;
  }

  @media ${mq.tablet3_up} and (min-height: 580px) and ${mq.landscape} {
    max-width: 449px;
    position: relative;
    left: -50px;
  }
`
const TitleFadeIn = keyframes`
  to { opacity: 1 }
`

const Title = styled.h1`
  width: 100%;
  margin: 0;
  font-size: 3.5rem;
  font-weight: 700;
  opacity: ${({ animate }) => (animate ? 0 : 1)};
  animation: ${TitleFadeIn} 2s 2s forwards;
    

  @media ${mq.landscape} {
    margin-bottom: 15px;
  }

  @media ${mq.mobile3_up} and ${mq.portrait} {
    font-size: 4rem;
  }

  @media ${mq.tablet1_up} and ${mq.portrait},
  ${mq.tablet3_up} and  (min-height: 580px) and ${mq.landscape} {
    font-size: 7rem;
  }
`

const Subtitle = styled.p`
  margin: 0;
  align-self: flex-start;
  color: rgba(26, 26, 26, 0.72);
  opacity: ${({ animate }) => (animate ? 0 : 1)};
  animation: ${TitleFadeIn} 2s 3s forwards;
  transform: translateX(3px);

  @media ${mq.mobile3_up} {
    font-size: 1.1rem;
  }

  @media ${mq.tablet1_up} {
    font-size: 1.5rem;
    transform: translateX(5px);
  }
`

const HighLight = styled.span`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 22%;
    width: 100%;
    height: 7px;
    background: #cbedf8;
    z-index: -1;

    @media ${mq.mobile3_up} {
      bottom: 21%;
    }

    @media ${mq.tablet1_up} {
      height: 10px;
      bottom: 22%;
    }
  }
`

const Hero = () => {
  const isLandscape = useMediaQuery({ query: mq.landscape })
  const { siteLoaded } = useContext(MainContext)

  return (
    <>
      <Wrapper id="hero">
        <TextContainer>
          <Title animate={!siteLoaded}>
            <HighLight>We</HighLight> are <br />
            <HighLight>Care</HighLight> by {!isLandscape && <br />}
            Kreativ
          </Title>
          <Subtitle animate={!siteLoaded}>
            Filling digital space with love
          </Subtitle>
        </TextContainer>
      </Wrapper>

      {!siteLoaded ? (
        <>
          <HeroBubblesFast />
          <HeroBubblesSlow />
        </>
      ) : null}
    </>
  )
}
export default Hero