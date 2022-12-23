/*
Note : -
    Symbols are always unique.
    If you create two symbols with the same description they will have different values.
*/

console.log(Symbol('India') == Symbol('India'));        //False
console.log('India' == 'India');                        //True

const mySymbol_1 = Symbol('First Symbol');
const mySymbol_2 = Symbol('Second Symbol');

const yourName = 'Vikrant Patel';

myObject = {};

myObject[mySymbol_1] = '1st Symbol';
myObject[mySymbol_2] = '2nd Symbol';
myObject[yourName] = 'Suraj Malhotra';
myObject['Name'] = 'Ankit Raj';

console.log(myObject);
console.log(myObject[mySymbol_1]);
console.log(myObject[mySymbol_2]);
console.log(myObject[yourName]);
console.log(myObject['Name']);

//Symbol are ignored in for in loop
for (key in myObject) {
    console.log(key, ' - ', myObject[key]);
}