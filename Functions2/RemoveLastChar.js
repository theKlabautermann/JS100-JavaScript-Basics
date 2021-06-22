function removeLastChar(word) {
  return word.slice(0, word.length - 1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'