function getWords() {

  var fs = require("fs");
  var text = fs.readFileSync("./vocabulary.txt", "utf-8");
  var textByLine = text.split("\n")

  var vocabulary = [];

  for (var i = 0; i < textByLine.length; i+=2) {
    vocabulary.push(textByLine[i].split("\t"));
  }

  var word = vocabulary[Math.floor(Math.random()*vocabulary.length)];
  return [word];
}
  
export default function WordList() {
  console.log("words");
  //console.log(words);

  const words = getWords();

  return (
    <ul>
      {words.map(([en, de]) => <li key={en}>{en} - {de}</li>)}
    </ul>
  );
}