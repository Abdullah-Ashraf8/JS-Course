/*
    type coertion (type casting)
    +
    -
ex1:"" - 2 
ex2:false - true
*/
let a = "10";
let b = 20;
let c = true;

console.log(false - true);
console.log(a + b + c); //*1020true because of type coertion (a > string)
console.log(+a + b + c); //*31 = 10+20+1