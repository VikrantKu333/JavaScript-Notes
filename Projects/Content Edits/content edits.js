//Create a new element 'p'
let pElement = document.createElement('p');
pElement.id = 'editParagraph';

//Add text to that created element 'p'
let storeText = localStorage.getItem('yourText');
let textEdit;
if (storeText == null) {
    textEdit = document.createTextNode(`This element created by JavaScript. Click to "Edit" and "Save" Local Storage.`);
} else {
    textEdit = document.createTextNode(storeText);
}
editContent.appendChild(pElement);      //Insert 'p' element to the document
editParagraph.appendChild(textEdit);    //Add 'Text' to 'p' element

//Add event listener to the 'div'
editContent.addEventListener('click', function () {
    let textAreaCount = document.getElementsByClassName('editTextArea').length;
    if (textAreaCount == 0) {
        let htmlText = editParagraph.innerText;
        this.innerHTML = `<textarea id="editTextArea" class='editTextArea' rows="5">${htmlText}</textarea>`;
    }
    //Add event listener for the blur event on 'textarea'
    editTextArea.addEventListener('blur', function () {
        editContent.innerHTML = `<p id="editParagraph">${this.value}</p>`;
        localStorage.setItem('yourText', this.value);
    })
});

//Clear All Data
function clearAll() {
    localStorage.clear();
    location.reload();
}