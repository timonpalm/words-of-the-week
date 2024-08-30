import React from 'react'
import { create_vocabulary } from '@/functions/getVocabulary'
import { getSettings } from '@/functions/settings/settings'
import InteractionWrapper from './components/interactionWrapper'

export default async function Home () {
  // load settings
  var settings = await getSettings()

  // create vocabulary and get initial list of words
  const vocabulary = await create_vocabulary()

  return (
    <InteractionWrapper
      settings={settings}
      vocabulary={vocabulary}
    ></InteractionWrapper>
  )
}
