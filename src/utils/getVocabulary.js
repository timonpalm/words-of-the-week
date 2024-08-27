"use server";

// parse vocabulary from text file
export async function create_vocabulary() {
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