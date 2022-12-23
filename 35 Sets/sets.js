/*
 = = = = = Set Methods = = = = = 
Method	        Description
new Set()	    Creates a new Set
add()	        Adds a new element to the Set
delete()	    Removes an element from a Set
has()	        Returns true if a value exists
clear()	        Removes all elements from a Set
forEach()	    Invokes a callback for each element
values()	    Returns an Iterator with all the values in a Set
keys()	        Same as values()
entries()	    Returns an Iterator with the [value,value] pairs from a Set

Property	    Description
size	        Returns the number elements in a Set
*/

const studentName = new Set();
// console.log(studentName);

studentName.add('Lokesh Amar');
studentName.add('Rajnish Raj');
studentName.add('Ashvani Kumar');
studentName.add('Suraj Malhotra');
studentName.add('Vikash Patel');

console.log(studentName);
console.log(studentName.delete('Ashvani Kumar'));
console.log(studentName);
console.log(studentName.has('Rajnish Raj'));

console.log(studentName.size);

studentName.forEach(item => {
    console.log(item);
});

console.log(studentName.values());
console.log(studentName.keys());
console.log(studentName.entries());
console.log(studentName.clear());

