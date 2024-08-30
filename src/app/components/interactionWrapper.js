'use client'

import React from 'react'
import WordListContainer from './wordListContainer'
import Link from 'next/link'
import Countdown from './countdown'
import { useState } from 'react'

export default function InteractionWrapper ({
  settings,
  vocabulary,
  initWords
}) {
  // initial list of words
  const [words, setWords] = useState(initWords)

  return (
    <>
      <header>
        <h1 className='text-2xl'>WEEKLY WORDS</h1>
        <Countdown
          settings={settings}
          vocabulary={vocabulary}
          setWords={setWords}
        ></Countdown>
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
