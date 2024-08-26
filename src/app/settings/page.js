import Link from "next/link";

export default function Settings() {
    //const words = getWords();
  
    return <>
      <header>
        <h1 className="text-2xl">Settings</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/">
        back
        </Link>
      </header>
    </>
  }