/*
  Number Methods
  - Two Dots To Call A Methods >> if we wrote one dot it will be like you will write a float number
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
// or

console.log(100..toString())
console.log(100.5.toString())

//*  - toFixed()
console.log(100.5554555.toFixed(2)) // 100.56 and returns string

//*  - parseInt()
console.log(parseInt("100 abdullah")); // returns only the integer number from the string just if the string starts with a number
console.log(parseInt("adas 100 abdullah")); // NaN

//*- parseFloat()

console.log(parseFloat("200.12 sadsad"))// returns the float number from the string just if the string starts with a number

//*- isInteger() [ES6] checks if the index int or not

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

//* - isNaN() [ES6] checks if the output is NaN or not but not checking the index itself

console.log(isNaN("500")); // false because the index is string
console.log(isNaN("ahmed" / 15)); // true because the output value of the index is NaN