/*
  Template Literals (Template Strings)
*/
let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(`${a} ${b} "" ${5 + 6} ${c} \\ ${d}`)

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);