import React from 'react'
import 'typeface-poppins'
import { MainContextProvider } from '@context/main-context'

const wrapRootElement = ({ element }) => {
  return <MainContextProvider>{element}</MainContextProvider>
}
export { wrapRootElement }
