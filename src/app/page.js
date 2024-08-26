import Link from "next/link";
import React from "react";
import WordListContainer from "./components/wordListContainer";
import { getWords } from "./components/getWords";
import Countdown from "./components/countdown";

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

export default async function Home() {
  
  const vocabulary = create_vocabulary();
  var initWords = await getWords(vocabulary);

  //flex justify-between items-center mb-4 bg-slate-900 px-5 py-2 rounded

  return <>
    <header> 
      <h1 className="text-2xl">WORDS OF THE WEEK</h1>
      <Countdown></Countdown>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/settings">
      Settings
      </Link>
    </header>
    <WordListContainer vocabulary={vocabulary} initWords={initWords}></WordListContainer>
  </>
}

