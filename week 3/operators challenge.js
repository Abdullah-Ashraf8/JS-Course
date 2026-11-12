/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;
/*
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
*/

/*
ex1: console.log(++a + +b++ + +c++ - +a++);

[++a value:11 explian:pre increment]
[+ value:11 explian:summation]
[+b value:20 explian:unary plus]
[b++ value:31 explian:]
result = 31
[+ value:31 explian:summation]
[+c value:80 explian:unary plus]
[c++ value:80 explian:post increment]
result = 111
[- value:111 explian:subtraction]
[+a value:11 explian:unary plus]
[a++ value:11 explian:post increment]
result 100
*/


/*
Challenge 2
*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(-d + ++f + ++e * ++g); // 173 -d + ++f = 100 + (1 + 30) = 131 & 131 + 42 = 173
//   ++e * ++g = (1 + 20) * (1 + 1) = 42
