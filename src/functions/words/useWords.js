'use client'
import { useState, useEffect } from 'react'
import { getWords } from './words'

// client site words loading
export function useWords () {
  // load settings
  const [words, setWords] = useState([])

  useEffect(() => {
    getWords().then(w => setWords(w))
  }, [])

  return [words, setWords]
}
