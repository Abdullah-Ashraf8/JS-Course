//Assignment one:
let NumberOne = 10
let NumberTwo = 20

console.log(String(NumberOne) + String(NumberTwo))
console.log(typeof(String(NumberOne)))
console.log(`${NumberOne}`+`${NumberTwo}`)
console.log(typeof(`${NumberOne, NumberTwo}`))

console.log(NumberOne +`\n`+ NumberTwo)
console.log(`${NumberOne}
${NumberTwo}`)

//Assignment three
console.log("\'I'm in\n\\\\\nlove \\\\ \"\"\" \'\'\'\n++ With ++\n\\\"\"\"\\\"\"\"\ \n\"\"JavaScript\"\"\''")

//Assignment two
let a = 21;
let b = 20;
let result = `_${b}${a}`
console.log(`_${a}${result.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
//or
console.log(`_${a}_${`${b}${a}_`.repeat(3)}${b}_`);