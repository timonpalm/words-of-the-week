'use client'
import { useState, useEffect } from 'react'
import { getSettings } from './settings'
import { calcTargetDate } from '@/utils/calcTargetDate'

// client site settings loading
export function useSettings () {
  // load settings
  const [settings, setSettings] = useState(null)

  const [targetDate, setTargetDate] = useState(null)

  useEffect(() => {
    getSettings().then(s => {
      setSettings(s)
      setTargetDate(calcTargetDate(s.targetWeekday, s.targetTime))
    })
  }, [])

  return [settings, setSettings, targetDate, setTargetDate]
}
