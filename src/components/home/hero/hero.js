import React, { useContext, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import colors from '@styles/colors'
import mq from '@styles/media-queries'
import HeroBubblesSlow from './hero-bubbles-slow'
import HeroBubblesFast from './hero-bubbles-fast'
import MainContext from '@context/main-context'
import gsap from 'gsap/gsap-core'
import lottie from 'lottie-web'
import animation from '@animations/growth.json'

const Wrapper = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${mq.tablet3_up} {
    flex-direction: row;
    width: 900px;
    position: relative;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${mq.desktop2_up} {
    width: 950px;
  }
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
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Title = styled.h1`
  width: 100%;
  margin: 0;
  font-size: 3.5rem;
  font-weight: 700;
  opacity: 0;

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
  transform: translateX(3px);
  opacity: 0;

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

const AnimationContainer = styled.div`
  width: 350px;
  margin-top: 30px;
  margin: 20px auto 0;

  @media ${mq.mobile2_up} {
    width: 400px;
  }

  @media ${mq.tablet3_up} and (min-height: 580px) and ${mq.landscape} {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    width: 600px;
  }
`

const Hero = () => {
  const isLandscape = useMediaQuery({ query: mq.landscape })
  const { siteLoaded } = useContext(MainContext)

  const titleRef = useRef()
  const subtitleRef = useRef()
  const bubblesFastRef = useRef()
  const bubblesSlowRef = useRef()
  const animationContainer = useRef()

  useEffect(() => {
    if (!siteLoaded) {
      const bubblesFast = bubblesFastRef.current.children
      const bubblesSlow = bubblesSlowRef.current.children

      gsap.set([titleRef.current, subtitleRef.current], { alpha: 0 })

      const tl = gsap.timeline({ delay: 0.2 })

      tl.to(
        bubblesFast,
        {
          opacity: 1,
          duration: 0,
          stagger: (i) => 1 + i / 10,
        },
        0
      )

      tl.to(
        bubblesFast,
        {
          top: '-10%',
          duration: () => gsap.utils.random([1, 1.3, 1.5, 1.7]),
          stagger: (i) => 1 + i / 10,
        },
        0
      )

      tl.to(
        bubblesSlow,
        {
          opacity: 1,
          duration: 0,
          stagger: (i) => (i + 0.1) * 0.2,
        },
        2
      )

      tl.to(
        bubblesSlow,
        {
          top: '-10%',
          duration: (i) => (i + 1) * 3,
          stagger: (i) => (i + 0.1) * 0.2,
        },
        2
      )

      tl.to(titleRef.current, 2, { alpha: 1 }, '2')
      tl.to(subtitleRef.current, 2, { alpha: 1 }, '2.5')
    } else {
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 1 })
    }

    let direction = 1

    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      autoplay: true,
      animationData: animation,
      loop: false,
    })

    anim.addEventListener('complete', () => {
      direction *= -1
      anim.setDirection(direction)
      anim.play()
    })

    return () => anim.destroy()
  }, [])

  return (
    <>
      <Wrapper id="hero">
        <TextContainer>
          <Title animate={!siteLoaded} ref={titleRef}>
            <HighLight>We</HighLight> are <br />
            <HighLight>Care</HighLight> by {!isLandscape && <br />}
            Kreativ
          </Title>
          <Subtitle animate={!siteLoaded} ref={subtitleRef}>
            Filling digital space with love
          </Subtitle>
        </TextContainer>

        <AnimationContainer ref={animationContainer} />
      </Wrapper>

      {!siteLoaded ? (
        <>
          <HeroBubblesFast ref={bubblesFastRef} />
          <HeroBubblesSlow ref={bubblesSlowRef} />
        </>
      ) : null}
    </>
  )
}
export default Hero
