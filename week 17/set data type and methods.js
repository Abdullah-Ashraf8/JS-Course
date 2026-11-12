/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
let myUniqueData = new Set([1, 1, 1, 2, 3, "A"]);
// console.log(myData);
// console.log(myUniqueData);
// console.log(myUniqueData.size);
// console.log(myUniqueData[0]); //* you can't access set elements with index so the output is "undefined"

//*Methods:
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// myUniqueData.delete("A");
console.log(myUniqueData.delete(20));//false 
console.log(myUniqueData.delete(2));//True
console.log(myUniqueData);

// myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

console.log(`Is Set has element |A|? ${myUniqueData.has("A")}`)

