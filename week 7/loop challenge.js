/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar", "Suiiii"];
let i = 0
let counter = 1;
for (; i < myAdmins.length; i++)
{
    if (myAdmins[i] === "Stop") break;
}
document.write(`<div><h3>We Have ${i} Admins</h3> <hr></div>`);

for (let j = 0; j < myAdmins.length; j++)
{
    counter = 1;
    document.write(`
        <div><h3>The Admin For Team ${j + 1} Is ${myAdmins[j]} </h3>
        <h3>Team Members: </h3>
        </div>`);
        for (let k = 0; k < myEmployees.length; k++)
            {
                if (myAdmins[j][0] === myEmployees[k][0]) {
                    document.write(`<p>${counter}- ${myEmployees[k]}</p>`)
                    counter++;
                }
            }
            document.write(`<hr>`)
            if(myAdmins[j+1] === "Stop") break;
}