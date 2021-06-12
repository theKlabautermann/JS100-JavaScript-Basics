/*
From MDN: 
The continue statement terminates execution of the statements in the current iteration
of the current or labeled loop, and continues execution of the loop with the next iteration.
*/

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) continue;
  console.log(cities[i]);
}