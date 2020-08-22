import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  margin: 0 0 30px;
  font-size: 1.2rem;
  line-height: 1.7rem;
  font-weight: normal;
  color: #6c6c6c;
`

const Paragraph = ({ text }) => {
  return <Text>{text}</Text>
}
export default Paragraph
