import { createContext, useState } from 'react'

export const Context = createContext()

export function ContextProvider ({ children }) {
  const [lap, setLap] = useState([])
  const [showLap, setShowLap] = useState(false)

  return (
    <Context.Provider value={{ lap, setLap, showLap, setShowLap }}>
      {children}
    </Context.Provider>
  )
}
