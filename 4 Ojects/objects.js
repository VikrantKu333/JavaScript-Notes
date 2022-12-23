// Creating Object
console.log(" - - - - - - - - - - Creating Object - - - - - - - - - - ");
const computer = {
    brand: 'HP',
    color: 'Silver',
    price: 45000.00,
};
// Accessing Object
console.log(computer);

// Accessing Object Properties
console.log(computer.brand);
console.log(computer['color']);

// Creating Object with Methods
console.log(" - - - - - - - - - - Creating Object with Methods - - - - - - - - - - ");
const person = {
    firstName: 'Vikrant',
    lastName: 'Patel',
    age: 25,
    salary: 28000.00,
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person);
console.log(person.fullName());     //Access Object Methods
console.log(person.fullName);       //If you access a method without the () parentheses, it will return the function definition

// Creating Object Constructor
console.log(" - - - - - - - - - - Creating Object Constructor - - - - - - - - - - ");
function generalCar(givenName, givenSpeed) {
    this.carName = givenName;
    this.maxSpeed = givenSpeed;
    this.start = function () {
        console.log(`${this.carName} is Start.`);
    }
    this.running = function () {
        console.log(`${this.carName} is running ${this.maxSpeed} Km/H.`)
    }
    this.stop = function () {
        console.log(`${this.carName} is Stop.`)
    }
}
car = new generalCar();
console.log(car);
car.start();
car.running();
car.stop();
tesla = new generalCar('Tesla Model X', '250');
console.log(tesla);
tesla.start();
tesla.running();
tesla.stop();
lamborghini = new generalCar('Lamborghini Aventador', '350');
console.log(lamborghini);
lamborghini.start();
lamborghini.running();
lamborghini.stop();

// CRUD (Create Read Update Delete) Operation with an Object
console.log(" - - - - - - - - - - CRUD (Create Read Update Delete) - - - - - - - - - - ");
// Create Operation
let mobile = {};
mobile.brand = 'Apple';
mobile.model = 'SE';
mobile.color = 'Black';
mobile.price = 25000;
// Read Operation
console.log(mobile);
// Update Operation
mobile.model = 'X';
mobile.price = 45000;
// Read Operation
console.log(mobile);
// Delete Operation
delete mobile.model;
// Read Operation
console.log(mobile);