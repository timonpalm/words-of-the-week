'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { calcTargetDate } from '@/utils/calcTargetDate'
import { createWords, saveWords } from '@/functions/words/words'

export default function Countdown ({ settings, vocabulary, setWords }) {
  // calculate target date for next word update
  //var initDate = calcTargetDate(3, 19)
  //var n = new Date()
  //var initDate = new Date(n.getTime() + 5000)

  const [targetDate, setTargetDate] = useState(
    calcTargetDate(settings.targetWeekday, settings.targetHour)
  )

  const [hours, setHours] = useState('-')
  const [minutes, setMinutes] = useState('-')
  const [seconds, setSeconds] = useState('-')

  useEffect(() => {
    const interval = setInterval(() => {
      var now = new Date()
      var diff = targetDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTargetDate(() =>
          calcTargetDate(settings.targetWeekday, settings.targetHour)
        )
        createWords(vocabulary, settings.numberOfWords).then(w => {
          saveWords(w)
          setWords(w)
        })
      }

      setHours(() => Math.floor(diff / 1000 / 60 / 60))
      setMinutes(() => Math.floor(diff / 1000 / 60) % 60)
      setSeconds(() => Math.floor(diff / 1000) % 60)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <>
      <span className='text-red-700 mx-5 text-2xl'>
        {hours}:{minutes}:{seconds}
      </span>
      <span>{targetDate.toDateString()}</span>
    </>
  )
}
