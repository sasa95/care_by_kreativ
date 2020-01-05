import { css } from 'styled-components'
import mq from './media-queries'

const Container = css`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${mq.tablet1_up} {
    width: 700px;
  }

  @media ${mq.tablet3_up} {
    width: 900px;
  }
  @media ${mq.desktop2_up} {
    width: 950px;
  }
`

const FormField = css`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  -webkit-appearance: none;
  appearance: none;
  border: 2px solid rgba(196, 196, 196, 0.7);
  padding: 7px;
  border-radius: 5px;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: none !important;
  color: rgba(51, 51, 51, 0.72);

  @media ${mq.tablet1_up} {
    padding: 14px;
  }

  &:focus {
    border-color: rgb(196, 196, 196);
  }

  &::placeholder {
    line-height: normal;
    color: rgba(51, 51, 51, 0.72);
  }
`

export { Container, FormField }
