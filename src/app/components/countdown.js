'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { calcTargetDate } from '@/utils/calcTargetDate'
import { createWords, saveWords } from '@/functions/words/words'

export default function Countdown ({
  settings,
  vocabulary,
  setWords,
  targetDate,
  setTargetDate
}) {
  // calculate target date for next word update
  //var initDate = calcTargetDate(3, 19)
  //var n = new Date()
  //var initDate = new Date(n.getTime() + 5000)

  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('targetDate: ' + targetDate)
      console.log('settings: ' + settings)

      if (!targetDate) {
        console.log('no target date')
        setHours(null)
        setMinutes(null)
        setSeconds(null)
        return
      }

      var now = new Date()
      var diff = targetDate.getTime() - now.getTime()

      // termination of timer
      if (diff <= 0) {
        console.log('time to update words')
        // update target date
        setTargetDate(
          calcTargetDate(settings.targetWeekday, settings.targetTime)
        )
        // update words
        createWords(vocabulary, settings.numberOfWords).then(w => {
          saveWords(w)
          setWords(w)
        })
      }

      // set hours, minutes, seconds
      setHours(Math.floor(diff / 1000 / 60 / 60))
      setMinutes(Math.floor(diff / 1000 / 60) % 60)
      setSeconds(Math.floor(diff / 1000) % 60)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, settings, vocabulary, setTargetDate, setWords])

  return (
    <>
      <span className='text-red-700 mx-5 text-2xl'>
        {hours !== null ? hours.toString().padStart(2, '0') : '--'}:
        {minutes !== null ? minutes.toString().padStart(2, '0') : '--'}:
        {seconds !== null ? seconds.toString().padStart(2, '0') : '--'}
      </span>
      <span>{targetDate ? targetDate.toDateString() : '00:00'}</span>
    </>
  )
}
