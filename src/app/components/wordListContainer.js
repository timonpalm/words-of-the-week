"use client";
import { getWords } from './getWords'
import WordList from './wordList';
import { useState } from 'react';

export default function WordListContainer({ vocabulary, initWords}) {

    const [words, setWords] = useState(initWords);

    async function handleClick() {
        console.log("clicked");
        var newWords = await getWords(vocabulary);
        console.log(newWords);
        setWords(newWords);
    }


    return (
        <div className="flew flex-col mx-auto items-center">
            <WordList words={words}></WordList>
            <button className="bg-slate-700 text-slate-100 p-2 rounded my-5 mx-3" onClick={handleClick}>Spit new words</button>
      </div>
    )
}