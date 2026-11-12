/* 
object
--dig deeper
--dot notation vs bracket notation
--dynamic property name 
*/

let myVar = "country"; //--dynamic property name 

let user = {
    theName: "Abdullah",
    country: "Egypt",
    "country of": "Egypt", //!any valid string can be a property name 
};

console.log(user.theName);
console.log(user ["country of"]); //*bracket notation method
console.log(user.country);

console.log(user.myVar); // dot notation can't access a dynamic property name

console.log(user[myVar]); //* bracket notation can access a dynamic property name