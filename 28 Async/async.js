/*
JavaScript Async
    Callbacks
    Asynchronous
    Promises
    Async / Await
*/

// = = = = = Asynchronous = = = = = 
console.log(" = = = = = Asynchronous = = = = = ");
console.log('First Car');
setTimeout(() => {
    console.log('Second Car');
}, 1000);
console.log('Third Car');

// = = = = = Callbacks = = = = = 
console.log(" = = = = = Callbacks = = = = = ");
function addition(first, second) {
    console.log("Addition : ", first + second);
}
function subtraction(first, second) {
    console.log("Subtraction : ", first - second);
}
function calculate(firstNumber, secondNumber, callback) {
    let f_number = Number(firstNumber);
    let s_number = Number(secondNumber);
    callback(f_number, s_number);
}
calculate(9, 6, addition);
calculate("5", "4", addition);
calculate(9, 6, subtraction);
calculate("5", "4", subtraction);

// = = = = = Promises = = = = = 
console.log(" = = = = = Promises = = = = = ");
let promiseMessage = new Promise(function (resolve, reject) {
    let check = true;
    if (check == true) {
        resolve(`Success - callback function for the resolve of the promise`);
    } else {
        reject(`Error - callback function for the rejected case of the promise`);
    }
});
/*
.then() method takes up to two arguments
First argument is callback function for the resolve case of the promise
Second argument is callback function for the rejected case of the promise
*/
//First Method 
promiseMessage.then(
    function (successMessage) { console.log(successMessage); },
    function (errorMessage) { console.log(errorMessage); }
);
//Second Method
promiseMessage.then((successMessage) => {
    console.log(successMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// = = = = = Async / Await = = = = = 
console.log(" = = = = = Async / Await = = = = = ");
// async makes a function return a Promise
// await makes a function wait for a Promise
async function displayData() {
    // The await keyword can only be used inside an async function
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    console.log("Users : ", users);
    return users;
}
//First Method - Without Returning Promise
displayData();
//Second Method - With Returning Promise
displayData().then(usersData => console.log("Users Data : ", usersData));
