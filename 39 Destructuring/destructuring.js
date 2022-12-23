//Array Destructuring
console.log(" - - - - - - - - - - Array Destructuring - - - - - - - - - - ");
[a, b] = [10, 20];
console.log(a);
console.log(b);

//OR
console.log(" - - - - - - - - - - OR - - - - - - - - - - ");

[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(a);
console.log(b);
console.log(rest);

//OR
console.log(" - - - - - - - - - - OR - - - - - - - - - - ");

fruits = ['Banana', 'Litchi', 'Coconut', 'Orange', 'Grapes'];
[x, y, z] = fruits;
console.log(x, y, z);



//Object Destructuring
console.log(" - - - - - - - - - - Object Destructuring - - - - - - - - - - ");
({ a, b } = { a: 11, b: 22 });
console.log(a);
console.log(b);

//OR
console.log(" - - - - - - - - - - OR - - - - - - - - - - ");

({ a, b, ...rest } = { a: 111, b: 222, c: 333, d: 444, e: 555 });
console.log(a);
console.log(b);
console.log(rest);

//OR
console.log(" - - - - - - - - - - OR - - - - - - - - - - ");

const person = {
    firstName: 'Suraj',
    lastName: 'Malhotra',
    gender: 'Male',
    age: 25,
    start: function () {
        console.log('Hello Person');
    }
}
const { firstName, lastName, gender, age, start } = person;
console.log(firstName, lastName, gender, age, start);
start();