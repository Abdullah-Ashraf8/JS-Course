//*Assignment1

// function sayHello(theName, theGender) {
//     if (theGender === "Male")
//     {
//         console.log(`Hello Mr ${theName}`)
//     }
//     else if (theGender === "Female")
//     {
//         console.log(`Hello Miss ${theName}`)
//     }
//     else console.log(`Hello ${theName}`)

// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

//*Assignment2

// function calculate(firstNum, secondNum, operation) {
//     if (secondNum === undefined) {
//         console.log("Second Number Not Found");
//         return;
//     }
//     if (operation === undefined) {
//         console.log(firstNum + secondNum)
//         return;
//     };
//     switch (operation)
//         {
//         case "add":
//             console.log(firstNum + secondNum)
//             break;
//         case "subtract":
//             console.log(firstNum - secondNum)
//             break;
//         case "multiply":
//             console.log(firstNum * secondNum)
//             break;
//         default:
//             console.log("inb")
//             break;
//         }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

//*Assignment3

function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) {
        console.log("Age Out Of Range");
        return;
    }
    else {
        console.log(`Age in Monthes = ${theAge * 12}`)
        console.log(`Age in Weeks = ${theAge * 12 * 4}`)
        console.log(`Age in Days = ${theAge * 12 *4 * 7}`)
        console.log(`Age in Hours = ${theAge * 12 *4 * 7 * 24}`)
        console.log(`Age in Minutes = ${theAge * 12 *4 * 7 * 24 * 60}`)
        console.log(`Age in Seconds = ${theAge * 12 *4 * 7 * 24 * 60 * 60}`)
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//*Assignment4

function showDetails(a, b, c)
{
    let name = ""
    let age = 0;
    let status = false;
    let hire = "";
    (typeof a === "string") ? name = a : (typeof a === "number") ? age = a : (a === true) ? status = a : status = false;
    (typeof b === "string") ? name = b : (typeof b === "number") ? age = b : (b === true) ? status = b : status = false;
    (typeof c === "string") ? name = c : (typeof c === "number") ? age = c : (c === true) ? status = c : status = false;
    if (status === true) hire = "You Are Available For Hire";
    else hire = "You Are Not Available For Hire"
    console.log(`Hello ${name}, Your age is ${age}, ${hire}`)
}
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(22, "Ahmed", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(26, true, "Moaz"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Abdullah", 20); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//*Assignment5

// function createSelectBox(startYear, endYear) {
//     document.write(`<select name="years" id="years">`);
//     for (let i = startYear; i <= endYear; i++)
//     {

//     document.write(`<option value="${i}">${i}</option>`)
//     };
//     document.write(`</select>`);
// };
// createSelectBox(2000, 2021);

//*Assignment6

function multiply(...numbers) {
  let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof (numbers[i]) === "string") continue;
        if (typeof (numbers[i]) === "number" && !Number.isInteger(numbers[i])) numbers[i] = Math.trunc(numbers[i]);
        result *= numbers[i]; // result = result * numbers[i]
  }
  console.log(`Final Result Is ${result}`);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000