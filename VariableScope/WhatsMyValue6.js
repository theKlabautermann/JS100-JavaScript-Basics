//Expectation until the last exercise: Reference Error.
//Expectation Now: false

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);