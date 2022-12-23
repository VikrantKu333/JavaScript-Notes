//Test Regular Expression
//https://regexr.com

//Validation
let validFullName = false;
let validUserName = false;
let validEmailID = false;
let validMobileNumber = false;
let validUserPassword = false;

//Name Validation
fullName.onkeyup = () => {
    const regExp = /^[a-zA-Z\s]{2,20}$/;
    const string = fullName.value;
    if (regExp.test(string)) {
        fullName.style.border = '2px solid green';
        validFullName = true;
    } else {
        fullName.style.border = '2px solid red';
        validFullName = false;
    }
}

//User Name Validation
userName.addEventListener('keyup', () => {
    const regExp = /^[a-zA-Z]\w{1,14}$/;
    const string = userName.value;
    if (regExp.test(string)) {
        userName.style.border = '2px solid green';
        validUserName = true;
    } else {
        userName.style.border = '2px solid red';
        validUserName = false;
    }
});

//Email ID Validation
emailID.addEventListener('keyup', () => {
    const regExp = /^([\w\-\.]+)@([\w\-\.]+)\.[a-zA-Z]{2,7}$/;
    const string = emailID.value;
    if (regExp.test(string)) {
        emailID.style.border = '2px solid green';
        validEmailID = true;
    } else {
        emailID.style.border = '2px solid red';
        validEmailID = false;
    }
});

//Mobile Number Validation
mobileNumber.addEventListener('keyup', () => {
    const regExp = /^\d{10}$/;
    const string = mobileNumber.value;
    if (regExp.test(string)) {
        mobileNumber.style.border = '2px solid green';
        validMobileNumber = true;
    } else {
        mobileNumber.style.border = '2px solid red';
        validMobileNumber = false;
    }
});

//Password Validation
userPassword.addEventListener('keyup', () => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{8,}$/;
    const string = userPassword.value;
    if (regExp.test(string)) {
        userPassword.style.border = '2px solid green';
        validUserPassword = true;
    } else {
        userPassword.style.border = '2px solid red';
        validUserPassword = false;
    }
});

//Sign Up
formSubmit.onclick = (e) => {
    e.preventDefault();
    if (validFullName && validUserName && validEmailID && validMobileNumber && validUserPassword) {
        message.classList.add('success');
        message.innerText = 'Success Full';
        setTimeout(() => {
            message.classList.remove('success');
            message.innerText = '';
        }, 3000);
    } else {
        message.classList.add('failure');
        message.innerText = 'Some Error';
        setTimeout(() => {
            message.classList.remove('failure');
            message.innerText = '';
        }, 3000);
    }
}