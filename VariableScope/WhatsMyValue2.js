//Expected Output: Error. You have to declare the variable before using it.
//This time, the variable is declared with let which means it shouldn't be hoisted.

console.log(greeting);

let greeting = 'Hello world!';