let total;

// Converting Strings to Numbers
console.log(" - - - - - - - - - - Converting Strings to Numbers - - - - - - - - - - ");
total = Number("87.32");
console.log(total, ' : ', (typeof total));
total = parseInt('69.96');
console.log(total, ' : ', (typeof total));
total = parseFloat(`64.51`);
console.log(total, ' : ', (typeof total));

// Converting Numbers to Strings
console.log(" - - - - - - - - - - Converting Numbers to Strings - - - - - - - - - - ");
total = String(15);
console.log(total, ' : ', (typeof total));
total = (55).toString()
console.log(total, ' : ', (typeof total));

// Converting Booleans to Numbers
console.log(" - - - - - - - - - - Converting Booleans to Numbers - - - - - - - - - - ");
total = Number(true);
console.log(total, ' : ', (typeof total));
total = Number(false);
console.log(total, ' : ', (typeof total));

// Converting Numbers to Booleans
console.log(" - - - - - - - - - - Converting Numbers to Booleans - - - - - - - - - - ");
total = Boolean(1);
console.log(total, ' : ', (typeof total));
total = Boolean(0);
console.log(total, ' : ', (typeof total));

// Converting Booleans to Strings
console.log(" - - - - - - - - - - Converting Booleans to Strings - - - - - - - - - - ");
total = String(true);
console.log(total, ' : ', (typeof total));
total = false.toString();
console.log(total, ' : ', (typeof total));

// Converting Dates to Strings
console.log(" - - - - - - - - - - Converting Dates to Strings - - - - - - - - - - ");
let currentDate = new Date();
console.log(currentDate, ' : ', (typeof currentDate));
total = String(currentDate);
console.log(total, ' : ', (typeof total));

// Converting Arrays to Strings
console.log(" - - - - - - - - - - Converting Arrays to Strings - - - - - - - - - - ");
total = [5, 9, 6, 8, 3];
console.log(total, ' : ', total.length, ' : ', (typeof total));
total = String(total);
console.log(total, ' : ', total.length, ' : ', (typeof total));

// Convert Number to Decimal Number
console.log(" - - - - - - - - - - Convert Number to Decimal Number - - - - - - - - - - ");
total = 45.75396;
console.log(total.toFixed());
console.log(total.toFixed(2));
total = 69;
console.log(total.toFixed());
console.log(total.toFixed(2));
