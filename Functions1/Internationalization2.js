function extractLanguage(locale) {
  return locale.substring(0, 2);
}

function extractRegion(locale) {
  return locale.substring(3, 5);
}

function greet(ISO) {
  switch(ISO) {
    case('en'):
      return 'Hi!';
      break;
    case('fr'):
      return 'Salut!';
      break;
    case('pt'):
      return 'Olá!';
      break;
    case('de'):
      return 'Hallo!';
      break;
    case('sv'):
      return'Hej!';
      break;
    case('af'):
      return 'Haai!';
      break;
  }
}

function localGreet(locale) {
  let language = extractLanguage(locale);
  if (language !== 'en') {
    return greet(language);
  } else {
    let region = extractRegion(locale);
    switch(region) {
      case('US'): return 'Hey!';
      case('GB'): return 'Hello!';
      case('AU'): return 'Howdy!';
    }
  }
}

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'