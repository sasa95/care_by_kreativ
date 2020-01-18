import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [siteLoaded, setSiteLoaded] = useState(false)
  const [pathname, setPathname] = useState()

  return (
    <MainContext.Provider
      value={{
        siteLoaded,
        setSiteLoaded,
        pathname,
        setPathname,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export { MainContext as default }
