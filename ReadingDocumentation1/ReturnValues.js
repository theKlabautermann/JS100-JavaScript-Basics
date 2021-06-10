let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

console.log(typeof tweet); //expected return: string
console.log(typeof words); //expected return: object
console.log(typeof isValid); //expected return: boolean