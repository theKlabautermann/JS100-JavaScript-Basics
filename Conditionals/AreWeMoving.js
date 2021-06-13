let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;

console.log(isMoving);

/*
First (speed > 0 || acceleration > 0) is evaluated to true
Then brakingForce < acceleration is evaluated to true as well
Lastly the && statement is evaluated as true
Therefore true is logged to the console.

Bonus Question:
If we would have left the brackets the snippet would evaluate like this:
First brakingForce < acceleration would evaluate to true
Then speed > 0 would evaluate to false
Therefore the && statement would evaluate to false as well.
acceleration > 0 still evaluates to true though
Therefore the || statement would turn the entire statement true and log True to the console.

Although the end result turned out to be True either way,
we need the brackets to keep the order in which the statements are evaluated consistent.
*/