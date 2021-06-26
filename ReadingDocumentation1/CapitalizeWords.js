function capitalize(input) {
  let array = input.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
  }
  return array.join(' ');
}

console.log(capitalize('launch school tech & talk'));