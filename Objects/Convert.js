let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);

//Alternative using a For...in Loop:
let nestedPerson2 = [];
for (prop in person) {
  nestedPerson2.push([prop, person[prop]]);
}

console.log(nestedPerson2);