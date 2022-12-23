// JavaScript keyup Events - Input User Name
inputText.addEventListener('keyup', () => {
    outputText.style.color = 'Green';
    outputText.innerText = inputText.value;
});

// JavaScript change Events - Select Option
languageSelect.addEventListener('change', () => {
    languageOption.innerText = languageSelect.value;
});

// JavaScript change Events - Show Password
showPassword.addEventListener('change', () => {
    if (passwordBox.getAttribute('type') === 'password') {
        passwordBox.setAttribute('type', 'text');
    } else {
        passwordBox.setAttribute('type', 'password');
    }
});

// JavaScript input Events - Range Value
range.addEventListener('input', () => {
    rangeValue.innerText = range.value;
});