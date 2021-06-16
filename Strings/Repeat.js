function repeat(input) {
  let output = ''
  for (let i = 0; i < 3; i += 1) {
    output = output + input;
  }
  return output;
}

console.log(repeat('ha'));