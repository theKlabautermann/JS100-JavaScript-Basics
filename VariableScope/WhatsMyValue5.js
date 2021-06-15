//Expected output: Error. a is already declared.
//We could resolve this bug by re-assigning a's value (instead of declaring a again.)

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();