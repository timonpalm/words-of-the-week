'use client'
import SettingBlock from './components/settingBlock'
import { useSettings } from '@/functions/settings/useSettings'

export default function Settings () {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const [settings, setSettings] = useSettings()

  console.log(settings)

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
      <form>
        <SettingBlock>
          <select name='weekday' id='weekday'>
            <option value={0}>Sunday</option>
            <option value={1}>Monday</option>
            <option value={2}>Tuesday</option>
            <option value={3}>Wednesday</option>
            <option value={4}>Thursday</option>
            <option value={5}>Friday</option>
            <option value={6}>Saturday</option>
          </select>
          <input
            id='hour'
            type='time'
            defaultValue={settings ? settings.targetHour + ':00' : ''}
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
          <input type='file'></input>
        </SettingBlock>
        <div>
          <button type='submit' onSubmit={setSettings}>
            Save
          </button>
        </div>
      </form>
    </>
  )
}
