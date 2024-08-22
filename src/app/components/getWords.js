function getWords(n_words = 10) {

  var fs = require("fs");
  var text = fs.readFileSync("./vocabulary.txt", "utf-8");
  var textByLine = text.split("\n")

  var vocabulary = [];

  for (var i = 0; i < textByLine.length; i+=2) {
    vocabulary.push(textByLine[i].split("\t"));
  }

  var chosen_words = [];
  
  for (var i = 0; i < n_words; i++) {
    var random_index = Math.floor(Math.random() * vocabulary.length);
    chosen_words.push(vocabulary[random_index]);
  }    

  return chosen_words;
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