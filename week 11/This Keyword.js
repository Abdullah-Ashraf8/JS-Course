console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
    console.log(this);
    return this;
};
sayHello();

document.getElementById("cl").onclick = function () {
    console.log(this);
};

let user = {
    theAge: 20,
    ageInDays: function () {
        return this.theAge * 365;
    },
};
console.log(user.theAge);
console.log(user.ageInDays());

//* search about strict mode