const audio = new Audio('..\\Webdriver Torso.mp3');
// audio.play();

//Current Date and Time
const currentDateTime = new Date();
console.log(currentDateTime);

//Current Date
const cdy = currentDateTime.getFullYear();
const cdm = ((currentDateTime.getMonth() + 1) < 10) ? ('0' + (currentDateTime.getMonth() + 1)) : (currentDateTime.getMonth() + 1);
const cdd = currentDateTime.getDate();
const currentDate = cdy + '-' + cdm + '-' + cdd;
console.log('Current Date - ', currentDate);
selectDate.setAttribute('min', currentDate);
selectDate.setAttribute('max', (cdy + 3) + '-' + cdm + '-' + cdd);
selectDate.value = currentDate;

//Current Time
const cth = (currentDateTime.getHours() < 10) ? ('0' + currentDateTime.getHours()) : currentDateTime.getHours();
const ctm = (currentDateTime.getMinutes() < 10) ? ('0' + currentDateTime.getMinutes()) : currentDateTime.getMinutes();
const currentTime = cth + ':' + ctm;
console.log('Current Time - ', currentTime);
selectTime.value = currentTime;

//Alarm 
setAlarm.onclick = () => {
    const alarmDateTime = new Date(selectDate.value + ' ' + selectTime.value);
    const nowDateTime = new Date();
    const alarmTime = alarmDateTime - nowDateTime;
    if (alarmTime >= 0) {
        setTimeout(() => {
            audio.play();
            console.log('Ringing .....');
        }, alarmTime);
    }
    console.log(selectDate.value + ' ' + selectTime.value);
    console.log(alarmDateTime);
    console.log(alarmTime);
}
