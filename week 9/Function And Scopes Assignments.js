//!Assignment1

function getDetails(zName, zAge, zCountry) {
function namePattern(zName) {
    let laname = "";
    let frname = "";
    for (let i = 0; i < zName.length; i++) {
        frname += zName[i];
        if (zName[i] === " ") laname = zName[i + 1];
        if (zName[i] === " ") break;
    }
  zName = `Hello ${frname}${laname}., `;
  return zName;
}
  function ageWithMessage(zAge) {
    let agenum = "";
      for (let i = 0; i < zAge.length; i++) {
          if (!isNaN(parseInt(zAge[i]))) {
              agenum += zAge[i];
          }
}
    zAge = `Your Age Is ${agenum}, `;
    return zAge;
}
  function countryTwoLetters(zCountry) {
    let result = ""
    result += zCountry[0] + zCountry[1];
    zCountry = result.toUpperCase();
    return `You Live In ${zCountry}`;
}
  function fullDetails() {
    return namePattern(zName) + ageWithMessage(zAge) + countryTwoLetters(zCountry);
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//!Assignment2

let itsMe = () => `Iam A Normal Function`;


console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//!Assignment3
//!Assignment4

function specialMix(...data) {
  // Your Code Here
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings