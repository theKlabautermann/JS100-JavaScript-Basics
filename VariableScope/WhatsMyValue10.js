//Expectation: { firstName: 'Jane', lastName: 'Doe' }
//We can't change what the constant variable points to but we can mutate the object.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);