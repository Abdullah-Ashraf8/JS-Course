let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
    console.log(`Acc = ${acc}`);
    console.log(`current element = ${current}`);
    console.log(`current element index = ${index}`);
    console.log(`arr = ${arr}`);
    console.log(`acc + current = ${acc + current}`);
    console.log(`-###################-`);
    return acc + current;
}, 5);
console.log(add);