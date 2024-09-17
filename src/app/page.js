'use client'

import React from 'react'
import { create_vocabulary } from '@/functions/getVocabulary'
import { useWords } from '@/functions/words/useWords'
import { useSettings } from '@/functions/settings/useSettings'
import { useState, useEffect } from 'react'
import Countdown from './components/countdown'
import Link from 'next/link'
import WordListContainer from './components/wordListContainer'

export default function Home () {
  // load settings
  const [settings, _, targetDate, setTargetDate] = useSettings()

  // initial list of words
  const [words, setWords] = useWords()

  // load vocabulary
  const [vocabulary, setVocabulary] = useState([])
  useEffect(() => {
    create_vocabulary().then(v => setVocabulary(v))
  }, [])

  return (
    <>
      <header>
        <h1 className='text-2xl'>WEEKLY WORDS</h1>
        <Countdown targetDate={targetDate}></Countdown>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          href='/settings'
        >
          Settings
        </Link>
      </header>
      <WordListContainer
        vocabulary={vocabulary}
        words={words}
        setWords={setWords}
      ></WordListContainer>
    </>
  )
}
