function isBlank(input) {
  if (input.length === 0) {
    return true;
  } else {
    let result = 0;
    for (let i = 0; i < input.length; i += 1) {
      if (input[i] !== ' ') {
        result += 1;
      }
    }
    if (result !== 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true