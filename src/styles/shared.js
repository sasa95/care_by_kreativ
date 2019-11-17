import { css } from 'styled-components'
import breakpoints from './breakpoints'

const container = css`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${breakpoints.tablet} {
    width: 750px;
  }

  @media ${breakpoints.desktopS} {
    width: 970px;
  }
  @media ${breakpoints.desktopM} {
    width: 1170px;
  }
`

export { container }
