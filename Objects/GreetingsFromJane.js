let jane = {
  firstname: 'Jane',
  lastname: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: (name) => console.log(`Hej, ${name}!`), 
};

jane.greet('Bobby');