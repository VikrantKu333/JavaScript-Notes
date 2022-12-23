calculatorButtons = document.querySelectorAll('button');
let screenValue = '';
for (const buttonKey of calculatorButtons) {
    buttonKey.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        CeAc.innerText = 'CE';
        if (buttonText == '%') {
            screenValue += '%';
            calculatorScreen.value = screenValue;
        } else if (buttonText == '÷') {
            screenValue += '/';
            calculatorScreen.value = screenValue;
        } else if (buttonText == '×') {
            screenValue += '*';
            calculatorScreen.value = screenValue;
        } else if (buttonText == '−') {
            screenValue += '-';
            calculatorScreen.value = screenValue;
        } else if (buttonText == '+') {
            screenValue += '+';
            calculatorScreen.value = screenValue;
        } else if (buttonText == '⋅') {
            screenValue += '.';
            calculatorScreen.value = screenValue;
        } else if (buttonText == 'CE') {
            screenValue = screenValue.slice(0, -1);
            calculatorScreen.value = screenValue;
        } else if (buttonText == 'AC') {
            screenValue = '';
            calculatorScreen.value = screenValue;
        } else if (buttonText == '=') {
            CeAc.innerText = 'AC';
            screenValue = calculatorScreen.value;
            console.log(screenValue);
            screenValue = eval(screenValue);
            calculatorScreen.value = screenValue;
            console.log(screenValue);
        } else {
            screenValue += buttonText;
            calculatorScreen.value = screenValue;
        }
    })
}