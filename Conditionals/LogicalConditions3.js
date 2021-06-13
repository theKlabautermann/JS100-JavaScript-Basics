//Since we negate sale, the tertiary operator should assign 3.99 to the admissionPrice
//Therefore, 3.99 will be logged to the console.

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);