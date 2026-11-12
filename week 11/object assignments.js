//!Assignment 1

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());// My Name Is Elzero, My Age Is 38, I Live in Egypt

//!Assignment 2

let objMethodOne = {
    name: "Abdullah",
};

console.log(objMethodOne.name); // "Method One"

let objMethodTwo = new Object({
    age: 20,
});

console.log(objMethodTwo.age); // "Method Two"

let objMethodThree = Object.create({country: "Egypt"})

console.log(objMethodThree.country); // "Method Three"

let objMethodFour = Object.assign({city: "Giza"})

console.log(objMethodFour.city); // "Method Four"

//!Assignment 3

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({}, {a}, threeNums, twoNums);

console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

//!Assignment 4

