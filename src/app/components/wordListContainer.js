"use client";
import React from 'react'
import { getWords } from './getWords'
import WordList from './wordList';

function WordListContainer({ vocabulary }) {

    const [words, setWords] = React.useState(getWords(vocabulary));

    function handleClick() {
        console.log("clicked");
        setWords(getWords(vocabulary));
    }

    return (
        <div className="flew flex-col mx-auto items-center">
            <WordList words={words}></WordList>
            <button className="bg-slate-700 text-slate-100 p-2 rounded my-5 mx-3" onClick={handleClick}>Spit new words</button>
      </div>
    )
}

export default WordListContainer