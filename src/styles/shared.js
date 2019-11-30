import { css } from 'styled-components'
import query from './breakpoints'

const container = css`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${query.tablet1_up} {
    width: 750px;
  }

  @media ${query.tablet3_up} {
    width: 970px;
  }
  @media ${query.desktop2_up} {
    width: 1170px;
  }
`

export { container }
