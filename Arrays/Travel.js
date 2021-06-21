let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(target, options) {
  let result = 0;
  for (let i = 0; i < options.length; i += 1) {
    if (options[i] === target) {
      result += 1;
    }
  }
  if (result > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false