import React from 'react'
import 'typeface-muli'
import './static/js/iOS-zoom-fix'
import { NavigationProvider } from './src/context/navigation-context'

const wrapRootElement = ({ element }) => {
  return <NavigationProvider>{element}</NavigationProvider>
}
export { wrapRootElement }
