/*
The 'while' statement creates a loop that runs as long as a specified condition is fulfilled.
The 'do...while' statement creates a similar loop but runs at least once, regardless of whether or not the condition is true or not on the first run.

From MDN:
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.
The condition is evaluated before executing the statement.

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
*/

//First Snippet won't log 'Woooot' to the console since the condition is not fulfilled:
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

//Second Snippet will log 'Woooot' to the console once since it will only evaluate the condition after the loop was executed once.
counter = 0; //Slightly modified the code since counter is already declared in the first snippet.

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);