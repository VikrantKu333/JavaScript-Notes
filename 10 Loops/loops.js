// JavaScript Loops

// An array with some elements
let marks = [69, 85, 94, 76, 57];
let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
// An object with some properties
let person = { "name": "Suraj", "surname": "Patel", "age": "25" };

// The For Loop
console.log(" - - - - - - - - - - The For Loop - - - - - - - - - - ");
for (let j = 0; j < marks.length; j++) {
    console.log(marks[j]);
}

// The For In Loop
console.log(" - - - - - - - - - - The For In Loop - - - - - - - - - - ");
// Loop through all the elements in the array
console.log(" = = = = = Loop through all the elements in the array = = = = = ");
for (let f in fruits) {
    console.log(fruits[f]);
}
// Loop through all the properties in the object
console.log(" = = = = = Loop through all the properties in the object = = = = = ");
for (let properties in person) {
    console.log(properties, person[properties]);
}

// The For Of Loop
console.log(" - - - - - - - - - - The For Of Loop - - - - - - - - - - ");
// Iterating over array
console.log(" = = = = = Iterating over array = = = = = ");
for (let f of fruits) {
    console.log(f);
}
// Iterating over string
console.log(" = = = = = Iterating over string = = = = = ");
let car = "Tesla";
for (let c of car) {
    console.log(c);
}

// The Array.forEach() Loop
console.log(" - - - - - - - - - - The Array.forEach() Loop - - - - - - - - - - ");
fruits.forEach((itemValue) => {
    console.log(itemValue);
})

// The Array.forEach() Loop with arguments
console.log(" - - - - - - - - - - The Array.forEach() Loop with arguments - - - - - - - - - - ");
fruits.forEach(function (itemValue, itemIndex, arrayItself) {
    console.log(itemValue, " : ", itemIndex, " : ", arrayItself);
})

// The While Loop
console.log(" - - - - - - - - - - The While Loop - - - - - - - - - - ");
let f = 0;
while (f < fruits.length) {
    console.log(fruits[f]);
    f++;
}

// The Do While Loop
console.log(" - - - - - - - - - - The Do While Loop - - - - - - - - - - ");
f = 0;
do {
    console.log(fruits[f]);
    f++;
} while (f < fruits.length);