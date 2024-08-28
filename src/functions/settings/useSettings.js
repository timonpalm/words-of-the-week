'use client'
import { useState, useEffect } from 'react'
import { getSettings } from './settings'

// client site settings loading
export function useSettings () {
  // load settings
  const [settings, setSettings] = useState(null)
  useEffect(() => {
    getSettings().then(s => setSettings(s))
  }, [])

  return settings
}
