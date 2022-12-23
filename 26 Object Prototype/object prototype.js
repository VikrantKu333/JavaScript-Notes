// = = = = = Object Constructor = = = = = 
console.log(" - - - - - - - - - - Object Constructor - - - - - - - - - - ");
function student(inputName, inputCourse) {
    this.fullName = inputName;
    this.course = inputCourse;
}
//Object Prototype
student.prototype.getDetails = function () {
    return [this.fullName, this.course];
}
student.prototype.setDetails = function (newName, newCourse) {
    this.fullName = newName;
    this.course = newCourse;
}
//Creating Object 
let student_1 = new student('Niraj Sinha', 'MCA');
console.log(student_1);
console.log(student_1.getDetails());
student_1.setDetails('Suraj Malhotra', 'BCA');
console.log(student_1.getDetails());

// = = = = = Object Prototype Inheritance = = = = =
console.log(" - - - - - - - - - - Object Prototype Inheritance - - - - - - - - - - ");
let customer = {
    pray: function () {
        return `Prayer should be the key of the day and the lock of the night.`;
    },
    wish: function () {
        return 'Life is for service.';
    },
    changeName: function (newName) {
        this.name = newName;
    }
}
console.log(customer);

//Creates Object 'customer_1'
let customer_1 = Object.create(customer);
customer_1.name = 'Rohit Sinha';
customer_1.work = 'Website Designing';
console.log(customer_1);
console.log(customer_1.pray());
customer_1.changeName('Sonu Sinha');
console.log(customer_1);

//Creates Object 'customer_2'
let customer_2 = Object.create(customer, {
    name: { value: 'Vivek', writable: true },
    work: { value: 'Medical' }
});
console.log(customer_2);
console.log(customer_2.wish());
customer_2.changeName('Lalit');
console.log(customer_2);

// = = = = = Object Constructor | Object Prototype | Prototype Inheritance = = = = = 
console.log(" - - - - - - - - - - Object Constructor | Object Prototype | Prototype Inheritance - - - - - - - - - - ");
//Object Constructor
function employee(givenName, givenSalary, givenExperience) {
    this.name = givenName;
    this.salary = givenSalary;
    this.experience = givenExperience;
}
//Object Prototype
employee.prototype.slogan = function () {
    return `${this.name} - I will prepare, and someday my chance will come.`
}
//Create Object
let employee_1 = new employee('Mihir Panday', 20000, 5);
console.log(employee_1);
console.log(employee_1.slogan());
//Inherit Object Constructor
function programmer(givenName, givenSalary, givenExperience, givenLanguage) {
    employee.call(this, givenName, givenSalary, givenExperience);
    this.language = givenLanguage;
}
//Inherit Prototype
programmer.prototype = Object.create(employee.prototype);
//Manually set the constructor
programmer.prototype.constructor = programmer;
//Create Object
let programmer_1 = new programmer('Amit Raj', 45000, 7, 'PHP');
console.log(programmer_1);
console.log(programmer_1.slogan());