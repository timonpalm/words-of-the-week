import React from 'react'
import { getWords } from '@/functions/words/words'
import { create_vocabulary } from '@/functions/getVocabulary'
import { getSettings } from '@/functions/settings/settings'
import InteractionWrapper from './components/interactionWrapper'

export default async function Home () {
  // load settings
  var settings = await getSettings()

  // create vocabulary and get initial list of words
  const vocabulary = await create_vocabulary()
  var initWords = await getWords()

  return (
    <InteractionWrapper
      settings={settings}
      vocabulary={vocabulary}
      initWords={initWords}
    ></InteractionWrapper>
  )
}
