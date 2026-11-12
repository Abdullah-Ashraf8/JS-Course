let user = {
    theName: "Abdullah",
    theAge: 20,
    sayHello: function () {
        return `Hello ${this.theName} your age is ${this.theAge}`;
    },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());