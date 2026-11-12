/*
  Math Object
  - round() if the number next to the dot < 5 go down and if > 5 go up
  - ceil() go up
  - floor() go down
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(15.3));// 15
console.log(Math.round(15.5));// 16

console.log(Math.ceil(15.3));// 16
console.log(Math.floor(15.9));// 15

console.log(Math.max(15 , 55, 60, 80));// 80
console.log(Math.min(15 , 9, 55, 3));// 3

console.log(Math.pow(2, 4)); // 2^4 = 16

console.log(Math.random()); // returns random number

console.log(Math.trunc(99.6)); // returns integral part 