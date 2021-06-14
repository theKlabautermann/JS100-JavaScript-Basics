function compareByLength(word1, word2) {
  let result = word1.length - word2.length;
  if (result < 0 ) {
    return -1;
  } else if (result === 0) {
    return 0;
  } else {
    return 1;
  }
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));