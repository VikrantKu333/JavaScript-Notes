/*
 = = = = = Map Methods = = = = = 
Method	        Description
new Map()	    Creates a new Map object
set()	        Sets the value for a key in a Map
get()	        Gets the value for a key in a Map
clear()	        Removes all the elements from a Map
delete()	    Removes a Map element specified by a key
has()	        Returns true if a key exists in a Map
forEach()	    Invokes a callback for each key/value pair in a Map
entries()	    Returns an iterator object with the [key, value] pairs in a Map
keys()	        Returns an iterator object with the keys in a Map
values()	    Returns an iterator object of the values in a Map

Property	    Description
size	        Returns the number of Map elements
*/

const fruits = new Map();
// console.log(fruits);

fruits.set('Apple', 120);
fruits.set('Papaya', 40);
fruits.set('Orange', 140);
fruits.set('Mango', 80);
fruits.set('Grapes', 100);

console.log(fruits);
console.log(fruits.get('Orange'));
console.log(fruits.delete('Orange'));
console.log(fruits);
console.log(fruits.has('Mango'));

console.log(fruits.size);

fruits.forEach((values, keys) => {
    console.log(keys, ' - ', values);
});

console.log(fruits.values());
console.log(fruits.keys());
console.log(fruits.entries());
console.log(fruits.clear());