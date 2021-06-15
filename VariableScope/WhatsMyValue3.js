//Expected Output: Error. Since we declare the variable inside of the if statement, it's scope is limited to the block.

if (true) {
  let myValue = 20;
}

console.log(myValue);