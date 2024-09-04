'use client'
import SettingBlock from './components/settingBlock'
import { useSettings } from '@/functions/settings/useSettings'
import { saveSettings } from '@/functions/settings/settings'
import { saveVocabularyFile } from '@/functions/getVocabulary'

export default function Settings () {
  const [settings, _] = useSettings()

  async function onSubmit (event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const file = formData.get('file')
    if (file.name !== '') {
      const buffer = Buffer.from(await file.arrayBuffer())
      await saveVocabularyFile(buffer.toString())
      console.log('file saved')
    }

    await saveSettings({
      targetWeekday: formData.get('weekday'),
      targetTime: formData.get('time').slice(0, -3),
      numberOfWords: formData.get('quantity')
    })
    console.log('settings saved')
  }

  return (
    <>
      <header>
        <h1 className='text-2xl'>Settings</h1>
        <button
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          onClick={() => window.history.back()}
        >
          Home
        </button>
      </header>
      <form onSubmit={onSubmit}>
        <SettingBlock>
          <select
            name='weekday'
            id='weekday'
            defaultValue={settings ? settings.targetWeekday : 6}
            encType='multipart/form-data'
          >
            <option value={0}>Sunday</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
          </select>
          <input
            id='time'
            name='time'
            type='time'
            defaultValue={settings ? settings.targetTime + ':00' : ''}
          ></input>
        </SettingBlock>
        <SettingBlock>
          <label htmlFor='quantity'>Number of words: </label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            min='5'
            max='30'
            defaultValue={settings ? settings.numberOfWords : ''}
          ></input>
        </SettingBlock>
        <SettingBlock>
          <input type='file' id='file' name='file' accept='.txt'></input>
        </SettingBlock>
        <div>
          <input type='submit' value='Save Changes'></input>
        </div>
      </form>
    </>
  )
}
