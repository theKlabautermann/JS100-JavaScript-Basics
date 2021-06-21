let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function rehearse(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      rehearse(array[i]);
    } else {
      console.log(array[i]);
    }
  }
}

rehearse(vocabulary);