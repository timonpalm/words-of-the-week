import Link from "next/link";
import SettingBlock from "./components/settingBlock";

export default function Settings() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date = new Date();

  return <>
    <header>
      <h1 className="text-2xl">Settings</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">
      back
      </Link>
    </header>
    <SettingBlock>
      {weekday[date.getDay()]} { date.getHours()}:00
    </SettingBlock>
    <SettingBlock>
      Number of words: 10
    </SettingBlock>
    <SettingBlock>
      Vocabulary File
    </SettingBlock>
  </>
}