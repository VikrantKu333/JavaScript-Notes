//Primitive Data Types

//String
let studentName = 'Suraj Patel';
console.log(studentName, 'Data Types :', (typeof studentName));

//Number
let roll = 40;
let marks = 89.2;
console.log(roll, 'Data Types :', (typeof roll));
console.log(marks, 'Data Types :', (typeof marks));

//Boolean
let degree = true;
console.log(degree, 'Data Types :', (typeof degree));

//Undefined
let undefinedVariable = undefined;
console.log(undefinedVariable, 'Data Types :', (typeof undefinedVariable));

//Null
let nullVariable = null;
console.log(nullVariable, 'Data Types :', (typeof nullVariable));

//Reference Data Types

//Array
let fruits = ['Apple', 'Papaya', 'Banana', 'Grape', 'Orange'];
console.log(fruits, 'Data Types :', (typeof fruits));

//Object
let laptop = {
    HDD: '1 TB',
    SSD: '128 GB',
    RAM: '16 GB',
    Processor: 'Intel(R) Core(TM) i5',
    'Operating System': 'Windows 11 Pro'
}
console.log(laptop, 'Data Types :', (typeof laptop));

//Function
function printName() {
    console.log('Ankit Raj');
}
console.log(printName, 'Data Types :', (typeof printName));
