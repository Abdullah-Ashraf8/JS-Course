//*Assignment 1
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end;i += start)
// {
//     if (i === exclude) continue;
//     console.log(i);
// }
//*Assignment 2

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end; i--)
// {
//     console.log(i)
//     for (let j = start; j > end; j--) {
//         if (j < stop) break;
//         if (j < start) console.log(`0${j}`)
//     }
//     break;
// }

//*Assignment 3

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <= end; i++)
// {
//     console.log(i)
//     for (let j = start; j <= end; j++) {
//         if (j >= start) console.log(`--${breaker}\n--${end - breaker}`)
//     }
// }

//*Assignment 4

// let index = 10;
// let jump = 2;

// let i = index;
// for (; ;) {
//     console.log(i);
//     i -= jump;
//     if (i === jump) break;
// }

//*Assignment 5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// letter = letter.toUpperCase();
// let counter = letter.length;
// for (let i = letter.length; i <= friends.length; i++)
// {
//     if (friends[i - letter.length][letter.length - letter.length] == letter) continue;
//     console.log(`"${counter} => ${friends[i - letter.length]}"`)
//     counter++;
// }

//*Assignment 6

// let start = 0;
// let swappedName = "elZerO";
// let result = "";
// for (let i = start; i < swappedName.length; i++)
//     {
//     if(swappedName[i] === swappedName[i].toLowerCase())
//     {
//         result += swappedName[i].toUpperCase();
//     }
//     else if(swappedName[i] === swappedName[i].toUpperCase())
//     {
//         result += swappedName[i].toLowerCase();
//     }

    
// }
// console.log(result);

//*Assignment 7
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = ++start; i < mix.length; i++)
// {
//     if (typeof mix[i] === "string") continue;
//     else console.log(mix[i]);
// }

//* while loop assignment

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length)
{

    if (typeof friends[index] === typeof index) {
        index += 1;
        continue;
    }
    else if (friends[index].startsWith("A")) {
        index += 1;
        continue;
    }
    else {
        console.log(`"${++counter} => ${friends[index]}"`)
        index += 1;
    }
}