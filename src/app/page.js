import Link from 'next/link'
import React from 'react'
import WordListContainer from './components/wordListContainer'
import { getWords } from '@/functions/words/words'
import Countdown from './components/countdown'
import { calcTargetDate } from '@/utils/calcTargetDate'
import { create_vocabulary } from '@/functions/getVocabulary'
import { getSettings } from '@/functions/settings/settings'

export default async function Home () {
  // load settings
  var settings = await getSettings()

  // create vocabulary and get initial list of words
  const vocabulary = await create_vocabulary()
  var initWords = await getWords()

  // calculate target date for next word update
  var targetDate = calcTargetDate(settings.targetWeekday, settings.targetHour)

  return (
    <>
      <header>
        <h1 className='text-2xl'>WORDS OF THE WEEK</h1>
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
        initWords={initWords}
      ></WordListContainer>
    </>
  )
}
