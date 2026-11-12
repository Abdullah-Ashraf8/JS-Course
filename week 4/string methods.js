/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let name = "  Abdullah  ";
          //01234567 index starts with 0
console.log(name, name[0], name[5]);

console.log(name.charAt(2));//d

console.log(name.length)// 8

console.log(name.trim()); // بتمسح المسافات الزيادة في الاول وفي الاخر

console.log(name.toUpperCase());
console.log(name.toLowerCase());

//*  - Chain Methods

console.log(name.trim().charAt(5).toUpperCase());