import React from 'react'
import Heading from './heading'
import Paragraph from './paragraph'
import styled from 'styled-components'
import mq from '@styles/media-queries'
import Deliverables from './deliverables'

const Container = styled.div`
  text-align: left;

  @media ${mq.tablet3_up} {
    display: flex;
    align-items: baseline;
  }
`

const TextContainer = styled.div`
  @media ${mq.tablet3_up} {
    padding-right: 60px;
  }

  @media ${mq.desktop2_up} {
    padding-right: 90px;
  }
`

const Intro = ({ content: { text, deliverables } }) => {
  return (
    <Container>
      <TextContainer>
        {text.map((el) => {
          switch (el.type) {
            case 'heading':
              return <Heading text={el.content} />

            case 'paragraph':
              return <Paragraph text={el.content} />
            default:
              return undefined
          }
        })}
      </TextContainer>

      <Deliverables content={deliverables} />
    </Container>
  )
}
export default Intro
