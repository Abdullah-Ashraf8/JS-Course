/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let mynums = [1, 2, 3, 4, 5, 6];
let result = [];

for (let i = 0; i < mynums.length; i++){
    result.push(mynums[i] + mynums[i]);
}
console.log(result);

//* same idea with map

// let addself = mynums.map(function (element, index, arr) {
//     console.log(`current element=> ${element}`)
//     console.log(`current index=> ${index}`)
//     console.log(`array=> [${arr}]`)
//     console.log(`this=> [${this}]`)
//     return element + element;
// }, 10)

//*arrow function
let addself = mynums.map((element)=> element + element);
console.log(addself);


//! if i allready have function do the task
function addition(ele)
{
    return ele + ele;
}

let add = mynums.map(addition);
console.log(add);
