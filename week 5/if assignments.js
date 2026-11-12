//Assignment 1

// Test Case 1
let num = 9; // "009"
if (num < 10) console.log(`00${num}`);
// Test Case 2
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) console.log(`0${num}`);

// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) console.log(String(num3));

//Assignment 2

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) console.log(`${num1} is the same value as ${str}`);
if (num1 == str && typeof (num1) != typeof (str)) console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
if (num1 != str2 && typeof (num1) != typeof (str2)) console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
if (str != str2 || typeof (str) == typeof (str2)) console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);

//Assignment 3

let number1 = 10;
let number2 = 30;
let number3 = "30";

if (number3 > number1 && typeof (number3) != typeof (number1)
    && number3 > number1 && (number3) == (number2) && typeof (number3) != typeof (number2)
    && number3 !== number1 && typeof (number3) != typeof (number2));
{
    console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"${number3} Value And Type Is Not The Same As ${number1} And Type Is Not The Same As ${number2}"`)
}

//Assignment 4
// Edit What You Want Here

let ele1 = 8;
let ele2 = -5;
let ele3 = 8;
let ele4 = 42;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (ele1 > ele2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (ele1 > ele2 && ele1 < ele4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (ele1 > ele2 && ele1 === ele3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((ele1 + ele2) < ele4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((ele1 + ele3) < ele4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((ele1 + ele2 + ele3) < ele4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (ele4 - (ele1 + ele3) + ele2 === 21) {
  console.log("True");
} else {
  console.log("False");
}