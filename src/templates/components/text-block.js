import React from 'react'
import styled from 'styled-components'
import mq from '@styles/media-queries'
import Heading from './heading'
import Paragraph from './paragraph'

const Container = styled.div`
  text-align: left;
`

const TextContainer = styled.div`
  @media ${mq.tablet3_up} {
    padding-right: 60px;
  }

  @media ${mq.desktop2_up} {
    padding-right: 90px;
  }
`

const TextBlock = ({ text }) => {
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
    </Container>
  )
}
export default TextBlock
