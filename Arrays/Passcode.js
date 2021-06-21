let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-'));
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

//Bonus Question in solution: How can you join all elements of an array with no separator character?
//Answer: By passing an empty string as the argument:

console.log(passcode.join(''));