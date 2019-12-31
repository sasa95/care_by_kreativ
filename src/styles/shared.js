import { css } from 'styled-components'
import mq from './media-queries'

const container = css`
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

export { container }
