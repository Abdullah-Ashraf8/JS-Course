//* syntactic sugar "_"

//* without syntactic sugar "_":

console.log(1000000);

//* with syntactic sugar "_":

console.log(1_000_000);

console.log(1e6);// 100000 = 1 e عدد الاصفار

console.log(10 ** 6) // 10 power 6 = 1000000

//* with decimal

console.log(1000000.000);// becomes >> 1000000

//* BigInt
console.log(Number.MAX_SAFE_INTEGER);// max safe number that doesn't show errors
console.log(Number.MAX_VALUE);// the maximum value that you can't add more to it
console.log(Number.MIN_VALUE);// the minimum value that you can add more to it

