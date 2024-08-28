'use client'
import { createWords } from '@/functions/words/words'
import WordList from './wordList'
import { useState } from 'react'
import { useSettings } from '@/functions/settings/useSettings'
import { saveWords } from '@/functions/words/words'

export default function WordListContainer ({ vocabulary, initWords }) {
  const settings = useSettings()

  // initial list of words
  const [words, setWords] = useState(initWords)

  // handle new word click
  async function handleClick () {
    const newWords = await createWords(vocabulary, settings.numberOfWords)
    saveWords(newWords)
    setWords(newWords)
  }

  return (
    <div className='flew flex-col mx-auto items-center'>
      <WordList words={words}></WordList>
      <button
        className='bg-slate-700 text-slate-100 p-2 rounded my-5 mx-3'
        onClick={handleClick}
      >
        Spit new words
      </button>
    </div>
  )
}
