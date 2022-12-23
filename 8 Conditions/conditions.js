// JavaScript Conditional Statements
document.write("Time in Hours : ", new Date().getHours());

// The if Statement
document.write("<br>");
if (new Date().getHours() < 18) {
    document.write("Good Day");
}

// The else Statement
document.write("<br>");
if (new Date().getHours() < 18) {
    document.write("Good Day");
}
else {
    document.write("Good Evening");
}

// The else if Statement
document.write("<br>");
if (new Date().getHours() < 10) {
    document.write("Good Morning");
}
else if (new Date().getHours() < 18) {
    document.write("Good Day");
}
else {
    document.write("Good Evening");
}

// Ternary Operator
document.write("<br>");
document.write(new Date().getHours() < 12 ? 'AM' : 'PM');