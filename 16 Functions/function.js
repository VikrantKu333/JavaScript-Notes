//Regular Function
console.log(" - - - - - - - - - - Regular Function - - - - - - - - - - ");
function average(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(average(7, 2, 9));
console.log(average(3, 4, 9));
console.log(average(8, 1, 3));

//Arrow Function
console.log(" - - - - - - - - - - Arrow Function - - - - - - - - - - ");
let avg = (a, b) => {
    return (a + b) / 2;
}
console.log(avg(13, 17));
console.log(avg(8, 5));
