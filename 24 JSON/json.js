//JSON Object

/*
    Object => String    :   stringify()
    String => Object    :   parse()
*/

let student = {
    name: 'Vikrant Patel',
    age: '25',
    course: 'MCA',
    university: 'Magadh University, Bodh Gaya (Bihar)'
};

console.log(typeof student);
console.log(student);

//Object to String
let student_str = JSON.stringify(student);
console.log(typeof student_str);
console.log(student_str);

//String to Object
let student_obj = JSON.parse(student_str);
console.log(typeof student_obj);
console.log(student_obj);

