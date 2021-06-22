function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  let salutation = greeting();
  let receiver = recipient();
  console.log(salutation + ', ' + receiver + '!');
}

greet();