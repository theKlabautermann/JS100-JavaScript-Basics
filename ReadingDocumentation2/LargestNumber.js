// I would expect the highest numeric value to be Infinity.
//(since the type of Infinity is number, it should count as a numeric value:
typeof Infinity;

//According to MDN the number data type can store numbers up to 2^53 − 1:
Number.MAX_VALUE;

//If we were to use the BigInt data format, we could, according to MDN, safe an arbitrarily large integer.

//Edit after looking at the solution and submissions from others:
//Nobody else mentioned the BigInt data type... are they not considered numeric values for some reason?