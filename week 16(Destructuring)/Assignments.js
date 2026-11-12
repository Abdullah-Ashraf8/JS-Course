// //!Assignment1

// let myNumbers = [1, 2, 3, 4, 5];

// [a, , , , e] = myNumbers;
// console.log(a * e); // 5

// //!Assignment2

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// [a, b, c, [d, e, [f, g]]] = mySkills;


// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// //!Assignment3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// arr1[1] = arr3[1];
// arr1[2] = arr3[2];
// [c,a ,b] = arr1;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed
// //!Assignment4

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// const { age: a, working: w, country: c, hobbies:[h1, , h3] } = member;
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

// //!Assignment5

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// // Write Your Destructuring Assignment/s Here

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

//!Assignment6

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS", "js"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

[{ title: t1, age: a1, available: av1, skills: sk1},
    { title: t2, age: a2, available: av2, skills: sk2},
    { title: t3, age: a3, available: av3, skills: sk3}]
    = myFriends;

if (chosen === 1) { 
        console.log(t1);
        console.log(a1);
        if (av1 === true) console.log("Available");
        else console.log("Not Available");
        console.log(sk1[sk1.length - 1]);    
}
else if (chosen === 2) {
        console.log(t2);
        console.log(a2);
        if (av2 === true) console.log("Available");
        else console.log("Not Available");
        console.log(sk2[sk2.length - 1]);  
}
else if (chosen === 3) {
        console.log(t3);
        console.log(a3);
        if (av3 === true) console.log("Available");
        else console.log("Not Available");
        console.log(sk3[sk3.length - 1]);  
}
else console.log("Invalid data");