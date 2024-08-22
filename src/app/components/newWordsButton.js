'use client';

export default function NewWordsButton() {
    function handleClick() {
        console.log("new words clicked");
    }
    
    return <button className="bg-slate-700 text-slate-100 p-2 rounded" onClick={handleClick}>Spit new words</button>
}

