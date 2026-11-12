/*
  Destructuring
  - Challenge
*/

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