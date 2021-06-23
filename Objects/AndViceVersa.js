let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = Object.fromEntries(nestedArray);
console.log(person);

//Alternative using a loop
let person2 = {};
for (let i = 0; i < nestedArray.length; i += 1) {
  person2[nestedArray[i][0]] = nestedArray[i][1];
}

console.log(person2);