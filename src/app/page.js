import Link from "next/link";
import React from "react";
import WordListContainer from "./components/wordListContainer";
import { getWords } from "./components/getWords";
import Countdown from "./components/countdown";
import { calcTargetDate } from "@/utils/calcTargetDate";
import { promises as fs } from 'fs';

// parse vocabulary from text file
function create_vocabulary() {
  // read file
  var fs = require("fs");
  var text = fs.readFileSync("./vocabulary.txt", "utf-8");
  var textByLine = text.split("\n")

  var vocabulary = [];

  // split english-german
  for (var i = 2; i < textByLine.length; i+=2) {
    vocabulary.push(textByLine[i].split("\t"));
  }

  return vocabulary;
}

async function loadSettings() {
  
  const file = await fs.readFile(process.cwd() + '/settings.json', 'utf8');
  const settings = JSON.parse(file);

  return settings;
}

export default async function Home() {

  var settings = await loadSettings();
  
  const vocabulary = create_vocabulary();
  var initWords = await getWords(vocabulary, settings.numberOfWords);
  
  var targetDate = calcTargetDate(settings.targetWeekday, settings.targetHour);

  return <>
    <header> 
      <h1 className="text-2xl">WORDS OF THE WEEK</h1>
      <Countdown targetDate={targetDate}></Countdown>
      <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/settings">
      Settings
      </Link>
    </header>
    <WordListContainer vocabulary={vocabulary} initWords={initWords}></WordListContainer>
  </>
}

