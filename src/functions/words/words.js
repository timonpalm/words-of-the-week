'use server'
import { promises as fs } from 'fs'

// chooses n random words from a list of English-German word pairs
export async function createWords (vocabulary, n_words) {
  var chosen_words = []

  // choose n random words
  for (var i = 0; i < n_words; i++) {
    var random_index = Math.floor(Math.random() * vocabulary.length)
    chosen_words.push(vocabulary[random_index])
  }

  return chosen_words
}

export async function getWords () {
  const file = await fs.readFile(process.cwd() + '/public/words.json', 'utf8')
  const words = JSON.parse(file)
  return words.words
}

export async function saveWords (words) {
  const w = { words: words }
  console.log(JSON.stringify(w, null, 2))

  await fs.writeFile(
    process.cwd() + '/public/words.json',
    JSON.stringify(w, null, 2)
  )
}
