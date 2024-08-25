import NewWordsButton from "./components/newWordsButton";
import WordList from "./components/wordList";
import Link from "next/link";
import { getWords } from "./components/getWords";


// parse vocabulary from text file
function create_vocabulary() {
  // read file
  var fs = require("fs");
  var text = fs.readFileSync("./vocabulary.txt", "utf-8");
  var textByLine = text.split("\n")

  var vocabulary = [];

  // split english-german
  for (var i = 0; i < textByLine.length; i+=2) {
    vocabulary.push(textByLine[i].split("\t"));
  }

  return vocabulary;
}

export default function Home() {
  const vocabulary = create_vocabulary();
  var words = getWords(vocabulary);

  return <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Words of this week:</h1>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/settings">
      Settings
      </Link>
    </header>
    <WordList words={words}></WordList>
    <NewWordsButton></NewWordsButton>
  </>
}

