//!Assignment1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let answ = mix.map((e) => typeof e === "number" ? "" : e).reduce((acc, curr) => acc + curr);
console.log(answ);// Elzero

//!Assignment2

let myString = "EElllzzzzzzzeroo";
let NotRepeated = myString.split("").filter(function (e, index, arr) {
    return index === arr.indexOf(e)
}).join("");
console.log(NotRepeated);
//!Assignment3

let myArray = ["E", "l", "z", ["e", "r"], "o"];


//!Assignment4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let reversed = numsAndStrings.filter((e) => typeof e === "number").map((e) => -(e))
console.log(reversed)
// [-1, -10, 10, 20, -5, -3]

//!Assignment5

let nums = [2, 12, 11, 5, 10, 1, 99];

let answer = nums.reduce((acc, curr) =>
    (curr % 2 === 1) ? acc + curr : acc * curr
    , 1);

console.log(answer);