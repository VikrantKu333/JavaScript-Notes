//Classes
console.log(" - - - - - - - - - - Classes - - - - - - - - - - ");
class Employee {
    constructor(givenName, givenExperience, givenSalary) {
        this.name = givenName;
        this.experience = givenExperience;
        this.salary = givenSalary;
    }
    slogan() {
        return `${this.name} - If you do not change direction, you may end up where you are heading.`;
    }
    joiningYear() {
        let year = (new Date()).getFullYear();
        return year - this.experience;
    }
    //Notes - Static class methods are defined on the class itself.
    static welcomeMessage() {
        return `Alone we can do so little, together we can do so much.`;
    }
}
let employee_1 = new Employee('Niraj Sinha', 3, 18000);
console.log(employee_1);
console.log(employee_1.slogan());
console.log(employee_1.joiningYear());
console.log(Employee.welcomeMessage());

//Inheritance
console.log(" - - - - - - - - - - Inheritance - - - - - - - - - - ");
class Programmer extends Employee {
    constructor(givenName, givenExperience, givenSalary, givenLanguage) {
        super(givenName, givenExperience, givenSalary);
        this.language = givenLanguage;
    }
    wish() {
        return `${this.name} - Software is like sex: It’s better when it’s free.`;
    }
    //Notes - You cannot call a static method on an object, only on an object class.
    static welcomeQuotes() {
        return `The computer was born to solve problems that did not exist before.`;
    }
}
let programmer_1 = new Programmer('Rohit Raj', 2, 15000, 'HTML');
console.log(programmer_1);
console.log(programmer_1.wish());
console.log(Programmer.welcomeQuotes());
console.log(programmer_1.slogan());
console.log(programmer_1.joiningYear());
console.log(Programmer.welcomeMessage());