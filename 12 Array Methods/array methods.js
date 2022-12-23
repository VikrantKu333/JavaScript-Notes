// = = = Array Methods = = =
console.log(" - - - - - - - - - - Array Methods - - - - - - - - - - ");

let dryFruits = ["Almonds", "Apricot", "Pistachio", "Raisins", "Walnut"];
let fruits = ['Apple', 'Banana', 'Orange', 'Papaya', 'Grape', 'Mango'];

console.log(dryFruits.length);                      //Find array length

let dryFruitsString = dryFruits.toString();         //Converts an array to a string of (comma separated) array values
console.log(dryFruitsString);

let dryFruitsJoin = dryFruits.join(" - ");          //Joins all array elements into a string
console.log(dryFruitsJoin);

let dryFruitsSplit = dryFruitsJoin.split(" - ");    //Split a string to an array
console.log(dryFruitsSplit);

let removeLast = dryFruits.pop();                   //Removes the last element from an array
console.log(removeLast);                            //Returns the value that was "popped out"

let addLast = dryFruits.push("Peanuts");            //Adds a new element to an array (at the end)
console.log(addLast);                               //Return the new array length

let removeFirst = dryFruits.shift();                //Removes the first element from and array
console.log(removeFirst);                           //Returns the value that was "shifted out"

let addFirst = dryFruits.unshift("Saffron");        //Adds a new element to an array (at the beginning)
console.log(addFirst);                              //Returns the new array length

console.log(dryFruits);                             //Print Array



console.log(" - - - - - - - - - - Array.isArray() - - - - - - - - - - ");
console.log(Array.isArray(dryFruits));

console.log(" - - - - - - - - - - indexOf() - - - - - - - - - - ");
console.log(dryFruits.indexOf('Raisins'));

console.log(" - - - - - - - - - - concat() - - - - - - - - - - ");
let mixFruits = dryFruits.concat(fruits);
console.log("Mix Fruits (Concatenation Array) : ", mixFruits);
console.log("Dry Fruits : ", dryFruits);
console.log("Fruits : ", fruits);

console.log(" - - - - - - - - - - sort() - - - - - - - - - - ");
let mixFruitsSort = mixFruits.sort();
console.log("Mix Fruits (Sort Array) : ", mixFruitsSort);
console.log("Mix Fruits : ", mixFruits);

console.log(" - - - - - - - - - - reverse() - - - - - - - - - - ");
let mixFruitsReverse = mixFruits.reverse();
console.log("Mix Fruits (Reverse Array) : ", mixFruitsReverse);
console.log("Mix Fruits : ", mixFruits);

console.log(" - - - - - - - - - - splice() - - - - - - - - - - ");
let spliceFruits = mixFruits.splice(2, 5);
console.log("Mix Fruits (Splice Array) : ", spliceFruits);
console.log("Mix Fruits : ", mixFruits);

