/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "Abdullah", b, c, d, e = 5] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let [x, y, ,z] = myFriends;

console.log(x);
console.log(y);
console.log(z);