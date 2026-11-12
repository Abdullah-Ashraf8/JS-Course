/*
  String Methods
  - indexOf(Value [Mand اجباري], Start position [Opt اختياري] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End يعني اخر اندكس مش بيطبع)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "i love palestine"
console.log(a.indexOf("pal"));
console.log(a.indexOf("pal", 8));


console.log(a.indexOf("l")); //2 (l)ove يبدا من الاول
console.log(a.lastIndexOf("l"));//9 pa(l)estine يبدا من الاخر

console.log(a.slice(7)) //palestine
console.log(a.slice(0, 6)) // I love
console.log(a.slice(-4))// tine

console.log(a.repeat(2))

console.log(a.split(" ", 3))
console.log(a.split("", 16))