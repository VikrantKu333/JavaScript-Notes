// Spread Operator (...)
let number = [8, 9, 3, 6, 7, 2, 4, 5];

let min = Math.min(...number);
console.log("Min Number : ", min);

let max = Math.max(...number);
console.log("Max Number : ", max);

// Merge Array
let rgb = ['Red', 'Green', 'Blue'];
let cmyk = ['Cyan', 'Magenta', 'Yellow', 'Key (Black)'];
let color = [...rgb, ...cmyk];
console.log("Merge Array : ", color);