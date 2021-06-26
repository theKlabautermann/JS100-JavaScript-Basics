/*
Expected output:
Since we declare a again inside the block, the declaration on the global scope is ignored.
Since we declare it only after trying to log it to the console, an error occurs.
*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();