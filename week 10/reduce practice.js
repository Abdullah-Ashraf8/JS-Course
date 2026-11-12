let thebiggest = ["bla", "propaganda", "other", "aaa", "battery", "test"]

let check = thebiggest.reduce(function (acc, current) {
    console.log(`Acc = ${acc}`);
    console.log(`current element = ${current}`);
    console.log(acc.length > current.length ? acc : current);
    console.log(`-###################-`);
    return acc.length > current.length ? acc : current;
});
console.log(check);

let name = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let removechar = name.filter((e) =>
    e !== "@")
    .reduce((accu, curr) => accu + curr);
console.log(removechar);