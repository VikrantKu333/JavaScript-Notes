document.getElementById('demo').innerHTML = "Example of Inner HTML in ID";
document.getElementsByClassName("paragraph")[0].innerHTML = "Example of Inner HTML in Class Name";
document.getElementsByTagName("h2")[1].innerHTML = "Example of Inner HTML in Tag Name";
document.write("Example of Write");

//window.alert("This is Window Alert");
alert("This is Alert");
confirm("This is Confirm");
prompt("This is Prompt");

//window.print();

console.time("This is Your Console Time");

console.log("This is Console Log");
console.info("This is Console Info");
console.warn("This is Console Warning");
console.error("This is Console Error");

console.timeEnd('This is Your Console Time');

const person = {
    firstName: "Suraj",
    lastName: "Patel",
    age: 25,
    course: 'MCA'
};

console.time("This is Your Console Time Log");

console.log(person);
console.table(person);

console.timeLog("This is Your Console Time Log");

console.assert(5 < 4, 'This is not possible');

console.timeEnd("This is Your Console Time Log");

//console.clear();
