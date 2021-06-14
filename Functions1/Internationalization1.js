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

console.log(greet(fr));