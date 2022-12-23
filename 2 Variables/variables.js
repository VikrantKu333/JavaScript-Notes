/*
Most Common Programming Case Types - Naming Convention (Variable Name, Function Name)
1. Camel case   =>  camelCase
2. Snake case   =>  snake_case
3. Kebab case   =>  kebab-case
4. Pascal case  =>  PascalCase
*/

//There are 3 ways to declare a JavaScript variable

// var
// let
// const

/*
    Scope
var     Variables declared with var are in the function scope.
let     Variables declared as let are in the block scope.
const   Variables declared as const are in the block scope.

    Reassign the value
var     Allowed
let     Allowed
const   Not Allowed

    Redeclaration of the variable
var     Allowed
let     Not Allowed
const   Not Allowed
*/

//Number Data Types
var number1 = 45;
var number2 = 35;
console.log(number1 + number2);

//String Data Types
var str1 = "This is a String ";
var str2 = "Data Types";
console.log(str1);
console.log(str1 + str2);

//Objects Data Types
var marks = {
    Niraj: 75,
    Vikrant: 85,
    Suraj: 65,
    Rohit: 95,
    Vivek: 55,
}
console.log(marks);
console.log(marks.Suraj);

//Booleans Data Types
var a = true;
var b = false;
console.log(a, b);

//Undefined Data Types
var und1;
var und2 = undefined;
console.log(und1);
console.log(und2);
console.log(undefined);

//Null Data Types
var n = null;
console.log(n);
console.log(null);

//There are two types of data types in JavaScript
//1. Primitive Data Types (String, Number, Boolean, Undefined, Null, Symbol, BigInt)
//2. Reference Data Types (Arrays, Objects, Function)