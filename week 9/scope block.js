  function countryTwoLetters(zCountry) {
    let result = ""
    result += zCountry[0] + zCountry[1];
    result = result.toUpperCase();
    return result
}

console.log(countryTwoLetters("egypt"))