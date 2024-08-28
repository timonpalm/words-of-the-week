'use server'
import { promises as fs } from 'fs'

export async function getSettings () {
  const file = await fs.readFile(
    process.cwd() + '/public/settings.json',
    'utf8'
  )
  const settings = JSON.parse(file)

  return settings
}

export async function saveSettings (settings) {
  await fs.writeFile(
    process.cwd() + '/public/settings.json',
    JSON.stringify(settings, null, 2)
  )
}
