/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
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