function isBlank(input) {
  if (input.length > 0) {
    if (input === '  ') {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true