//!Assignment1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// myFriends.length = num;
// // Method 1
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//!Assignment2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

//!Assignment3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrTwo[2].concat(arrOne.reverse(), arrTwo.slice(0,2).reverse())
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//!Assignment4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

//!Assignment5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.indexOf(needle) === -1) {
    console.log("not found");
} else console.log("found");

if (haystack.includes(needle)) {
    console.log("found");
} else console.log("not found");

if (haystack.lastIndexOf(needle) === -1) {
    console.log("not found");
} else console.log("found");

//!Assignment6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = (arr1.concat(arr2)).sort(); 


console.log((allArrs.splice(arr2.length).join("")).toLowerCase());
