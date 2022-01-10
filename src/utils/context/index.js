import React, { useState, createContext } from 'react'

export const ViewContext = createContext()

export const ViewProvider = ({ children }) => {
  const [view, setView] = useState(1)

  const changeView = (newView) => {
    setView(newView)
  }

  return (
    <ViewContext.Provider value={{ view, changeView }}>
      {children}
    </ViewContext.Provider>
  )
}
