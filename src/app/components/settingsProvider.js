'use client'
import React from 'react'

export const SettingsContext = React.createContext({})

export default function SettingsProvider ({ children, settings }) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}
