//*filter words more than 4 characters
let sentence = "I Love Foood Code Too Playing Much"

let filtered = sentence.split(" ").filter((ele) => ele.length <= 4).join(" ");
console.log(filtered);

//*Filter strings + multiply nums
let mix = "A13BS2ZX";

let result = mix.split("").filter((e) => !isNaN(e)).map((e) => e * e).join("");
console.log(result);
