/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let swapped = swappingCases
  .split("")
  .map(function (element) {
    return element === element.toLowerCase()
      ? element.toUpperCase()
      : element.toLowerCase();
  })
  .join("");
console.log(swapped);

//*arrow function version
let swapped2 = swappingCases
  .split("")
  .map((element) =>
    element === element.toLowerCase()
      ? element.toUpperCase()
      : element.toLowerCase(),
  )
  .join("");
console.log(swapped2);

let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (e) {
    return isNaN(parseInt(e)) ? e : "";
  })
  .join("");

console.log(ign);
