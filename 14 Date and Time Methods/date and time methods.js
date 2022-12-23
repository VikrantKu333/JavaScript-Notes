// = = = Date and Time Method = = =
let currentDate = new Date();
console.log(Date());
console.log(currentDate);
console.log(currentDate.getHours());        //Display the number of hours into the day (0-23)
console.log(currentDate.getMinutes());      //Display the number of minutes into the hour (0-59)
console.log(currentDate.getSeconds());      //Display the seconds into the minute (0-59)
console.log(currentDate.getMilliseconds()); //Display the number of milliseconds into second (0-999)
console.log(currentDate.getFullYear());     //Display the full year (four digits)
console.log(currentDate.getMonth());        //Display the number of months into the year (0-11)
console.log(currentDate.getDate());         //Display the day of the month
console.log(currentDate.getDay());          //Display the number of days into the week (0-6)

let otherDate = new Date('2004-2-29 9:45:25');
// otherDate = new Date('Feb 29 2004');
// otherDate = new Date('2/29/2004');
console.log(otherDate);
otherDate.setDate(15)
otherDate.setMonth(6)
otherDate.setFullYear(2008)
console.log(otherDate);