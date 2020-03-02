import React from 'react'
import { MainContextProvider } from '@context/main-context'

const wrapRootElement = ({ element }) => {
  return <MainContextProvider>{element}</MainContextProvider>
}
export { wrapRootElement }
