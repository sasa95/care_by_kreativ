import React, { createContext, useState } from 'react'

export const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <NavigationContext.Provider value={{ navExpanded, setNavExpanded }}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationContext as default }
