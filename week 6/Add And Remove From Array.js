/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Abdullah", "14");
console.log(myFriends);

myFriends.push("mmmmmm", "45");
console.log(myFriends);

myFriends.shift();
console.log(myFriends);

myFriends.pop();
console.log(myFriends); //!['14', 'Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'mmmmmm']

let Last = myFriends.pop(); //! 'mmmmmm'

console.log(`last name is ${Last}`); //* last name is mmmmmm