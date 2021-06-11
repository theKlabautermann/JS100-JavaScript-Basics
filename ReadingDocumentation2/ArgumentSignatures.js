/*
From MDN:
The join() method creates and returns a new string by concatenating all of the elements in an array
(or an array-like object), separated by commas or a specified separator string.

If you call less than the one expected argument, the array elements are separated with a comma (",")

After trying it out below, the join method ignores additional arguments:
*/

let arr = ['Mastery', 'Based', 'Learning'];

console.log(arr.join()); //Less than the expected amount of argument
console.log(arr.join('-')); //Exactly the expected amount of arguments
console.log(arr.join('#', '-')); //More than the expected amount of arguments