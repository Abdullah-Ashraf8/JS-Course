let user = {
    theName: "Abdullah",
    theAge: 20,
    skills: ["html", "css", "js"],
    available: true,
    addresses: {
        ksa: "riyad",
        egypt: {
            first: "cairo",
            second: "giza",
        },
    }, 

    cheakavail: function () {
        if (user.available === true) {
            return 'ready'
        } else {
            return 'not ready'
        }
    },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.skills[0].toUpperCase());
console.log(user.skills.join(" | ")); 
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.second);
console.log(user["addresses"]["egypt"]["first"]);
console.log(user.cheakavail())
