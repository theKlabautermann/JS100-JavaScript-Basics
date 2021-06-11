/*

From MDN about Type Error:
The JavaScript exception "x is (not) y" occurs when there was an unexpected type. Oftentimes, unexpected undefined or null values.

From MDN about length:
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.

Conclusion: length is a property that returns a number, not a function. To fix it, we have to remove the brackets.
*/

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}