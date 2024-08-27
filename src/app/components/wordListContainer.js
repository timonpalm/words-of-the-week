"use client";
import { getWords } from '../../utils/getWords'
import WordList from './wordList';
import { useState, useContext } from 'react';
import { SettingsContext } from './settingsProvider';

export default function WordListContainer({ vocabulary, initWords }) {
    
    // load settings
    const settings = useContext(SettingsContext);

    // inital list of words
    const [words, setWords] = useState(initWords);

    // handle new word click
    async function handleClick() {
        var newWords = await getWords(vocabulary, settings.numberOfWords);
        setWords(newWords);
    }

    return (
        <div className="flew flex-col mx-auto items-center">
            <WordList words={words}></WordList>
            <button className="bg-slate-700 text-slate-100 p-2 rounded my-5 mx-3" onClick={handleClick}>Spit new words</button>
      </div>
    )
}