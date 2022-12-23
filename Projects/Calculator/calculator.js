function calculate() {
    firstNumber = document.getElementById("first").value;
    selectOption = document.getElementById("option").value;
    secondNumber = document.getElementById("second").value;

    console.log(firstNumber);
    console.log(selectOption);
    console.log(secondNumber);

    if (selectOption == '+') {
        answer = parseInt(firstNumber) + parseInt(secondNumber);
    }
    if (selectOption == '-') {
        answer = parseInt(firstNumber) - parseInt(secondNumber);
    }
    if (selectOption == '*') {
        answer = parseInt(firstNumber) * parseInt(secondNumber);
    }
    if (selectOption == '/') {
        answer = parseInt(firstNumber) / parseInt(secondNumber);
    }

    console.log(answer);
    document.getElementById("result").value = answer;
}

function cleared() {
    document.getElementById("first").value = '';
    document.getElementById("option").value = '+';
    document.getElementById("second").value = '';
    document.getElementById("result").value = '';
}