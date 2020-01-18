import React from 'react'
import 'typeface-poppins'
import './static/js/iOS-zoom-fix'
import { MainContextProvider } from '@context/main-context'

const wrapRootElement = ({ element }) => {
  return <MainContextProvider>{element}</MainContextProvider>
}
export { wrapRootElement }
