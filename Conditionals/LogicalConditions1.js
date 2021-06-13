// Expected output: Since the || operator accepts either of the two arguments, the true part turns the whole expression truthy

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}