// chooses n random words from a list of English-German word pairs
export function getWords(vocabulary, n_words = 10) {
    var chosen_words = [];
  
    // choose n random words
    for (var i = 0; i < n_words; i++) {
        var random_index = Math.floor(Math.random() * vocabulary.length);
        var word = vocabulary[random_index];
        console.log(word);
        chosen_words.push(vocabulary[random_index]);
    }    

    return chosen_words;
}