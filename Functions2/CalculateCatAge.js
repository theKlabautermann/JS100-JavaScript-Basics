function catAge(humanYears) {
  if (humanYears === 0) {
    return 0;
  } else if (humanYears === 1) {
    return 15;
  } else if (humanYears === 2) {
    return 24;
  } else if (humanYears >= 3) {
    return 24 + 4 * (humanYears - 2)
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32