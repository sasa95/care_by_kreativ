import React from 'react'
import 'typeface-poppins'
import { NavigationProvider } from './src/context/navigation-context'

const wrapRootElement = ({ element }) => {
  return <NavigationProvider>{element}</NavigationProvider>
}
export { wrapRootElement }
