let myDate;
let currentTime;
let CurrentDate;
let US_Date;
let India_Date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    myDate = new Date();
    currentTime = myDate.toLocaleTimeString();
    CurrentDate = myDate.toLocaleDateString();
    US_Date = myDate.toLocaleDateString("en-US", options);
    India_Date = myDate.toLocaleDateString("hi-IN", options);
    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("date").innerHTML = CurrentDate;
    document.getElementById("dateUS").innerHTML = US_Date;
    document.getElementById("dateIndia").innerHTML = India_Date;

    //Digital Clock
    digitalClock.innerHTML = currentTime;
}, 1000);