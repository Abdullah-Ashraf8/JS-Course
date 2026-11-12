let user = new Object({
    age: 15,
});

console.log(user);

user.age = 20; //will update the age from 15 to 20
user["country"] = "Egypt";

user.sayHello = function () {
    return 'Hello';
};

console.log(user);
console.log(user.country);
console.log(user.age);
console.log(user.sayHello());