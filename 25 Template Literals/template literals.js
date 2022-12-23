//Template Literals
//Template Strings
//String Templates
//Back-Tics Syntax

let text = `He's often called "Rohit".`;
console.log(text);

let firstName = "Vikash";
let lastName = "Raj";
let studentName = `Welcome ${firstName} ${lastName}!`;
console.log(studentName);

let price = 15;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

let header = "Synonyms:";
let tags = ["Template Literals", "Template Strings", "String Templates", "Back-Tics Syntax"];
let paragraph = '<b>Template Literals</b> use back-ticks (``) rather than the quotes ("") to define a string:';
let html = `<h1>${header}</h1><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul><p>${paragraph}</p>`;
document.write(html);