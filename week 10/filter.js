//*Get frinds with name starts with A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let withA = friends.filter((e) => e.startsWith("A"));

console.log(withA);


//* Get even Numbers only
let numbers = [11, 20, 2, 5, 17, 10];
let EvenNum = numbers.filter((ele) => ele % 2 === 0);
console.log(EvenNum);

//*Get frinds with name starts with A by using map
let friends1 = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let withA1 = friends.map((e) => e.startsWith("A") ? e : "");

console.log(withA1);

//* Get even Numbers only with Map
let numbers1 = [11, 20, 2, 5, 17, 10];
let EvenNum1 = numbers.map((ele) => ele % 2 === 0 ? ele : "odd");
console.log(EvenNum1);
