// JavaScript Local Storage Object
localStorage.setItem("Name", "Suraj Patel");
console.log(localStorage);
console.log(localStorage.getItem("Name"));
console.log(localStorage.length);
//localStorage.removeItem("Name");
//localStorage.clear();

//JavaScript Session Storage Object
sessionStorage.setItem("Name", "Niraj Sinha");
console.log(sessionStorage);
console.log(sessionStorage.getItem("Name"));
console.log(sessionStorage.length);
//sessionStorage.removeItem("Name");
//sessionStorage.clear();

//Insert Array in Local Storage Object
let studentName = ['Rohit Singh', 'Rajnish Raj', 'Suraj Malhotra', 'Aman Bharti', 'Vikrant Patel'];
localStorage.setItem('sName', JSON.stringify(studentName));
console.log(JSON.parse(localStorage.getItem('sName')));
