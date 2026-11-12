//! Assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 ** 5); // 100000
console.log(Math.trunc(100000.655)); // 100000
console.log(parseInt("100000 amount")); // 100000
console.log(parseFloat("100000 backage")); // 100000
console.log(500 * 200); // 100000
console.log(100000 / 1); // 100000
console.log(100000 / true); // 100000
console.log(100 * 1000); // 100000
console.log(50 * 2000); // 100000
console.log((100000.0000).toFixed()); // 100000

//! Assignment 2

console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991

//! Assignment 3

console.log((Number.MAX_SAFE_INTEGER.toString()).length); // 16

//! Assignment 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

//! Assignment 5

let num = 10;

console.log(+(Number.isInteger(num) + Number.isInteger(num))); // 2

//! Assignment 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+(flt.toFixed(0))); // 10
console.log(parseInt(flt)); // 10

//! Assignment 7

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4