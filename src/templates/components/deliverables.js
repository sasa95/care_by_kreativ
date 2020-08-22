import React from 'react'
import Heading from './heading'
import Paragraph from './paragraph'
import styled from 'styled-components'
import mq from '@styles/media-queries'

const Container = styled.div`
  text-align: left;
`

const Title = styled.h2`
  margin: 0 0 20px;
  font-weight: bold;
  font-size: 1.4rem;

  @media ${mq.mobile3_up} {
    font-size: 1.4rem;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: normal;
  color: #6c6c6c;
  display: flex;
  align-items: center;
  padding-left: 25px;
  white-space: nowrap;

  @media ${mq.tablet3_up} {
    :before {
      position: absolute;
      vertical-align: middle;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-left: -25px;
      margin-top: -1px;
      background: #e5eaf9;
      border-radius: 50%;
      content: '';
    }
  }
`

const Deliverables = ({ content }) => {
  return (
    <div>
      <Title>Deliverables</Title>

      <List>
        {content.map((item) => (
          <Item>{item}</Item>
        ))}
      </List>
    </div>
  )
}
export default Deliverables
