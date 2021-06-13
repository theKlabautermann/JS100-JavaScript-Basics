// Expected output: Since the && operator requires both parts truthy, the true false turns the whole expression falsy

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}