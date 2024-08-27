"use client";
import Link from "next/link";
import SettingBlock from "./components/settingBlock";
import { SettingsContext } from "../components/settingsProvider";
import { useContext } from 'react';
import SettingsProvider from "../components/settingsProvider";

export default function Settings() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const settings = useContext(SettingsContext);

  console.log(settings);

  return <>
    <SettingsProvider settings={settings}>
      <header>
        <h1 className="text-2xl">Settings</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">
        back
        </Link>
      </header>
      <form>
        <SettingBlock>
          {weekday[settings.targetWeekday]} { settings.targetHour}:00
        </SettingBlock>
        <SettingBlock>
          <label htmlFor="quantity">Number of words: </label>
          <input className="text-black"  type="number" id="quantity" name="quantity" min="5" max="30" defaultValue="20"></input>
        </SettingBlock>
        <SettingBlock>
          <input type="file"></input>
        </SettingBlock>
      </form>
    </SettingsProvider>
  </>
}