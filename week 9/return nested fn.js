/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function saymessage(fname, lname)
// {
//   let message = 'Hello'
//   //*nested function
//   function concatmsg()
//   {
//     message = `${message} ${fname} ${lname}`;
//   }
//   concatmsg();
//   return message;
// }
// console.log(saymessage("Abdullah", "Ashraf"));

//  

// Example 3
function saymessage(fname, lname)
{
  let message = 'Hello'
  //*nested function
  function concatmsg()
  {
    function returnfull()
    {
      return (`${fname} ${lname}`);
    }
    return `${message} ${returnfull()}`;
  }
  return concatmsg();
}
console.log(saymessage("Abdullah", "Ashraf"));