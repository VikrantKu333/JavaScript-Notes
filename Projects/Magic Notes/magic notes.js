//Create Notes
function createNotes() {
    let notesStorage = localStorage.getItem('Notes');
    if (notesStorage == null) {
        notesObject = [];
    } else {
        notesObject = JSON.parse(notesStorage);
    }
    let myNotes = {
        myNotesTitle: notesTitle.value,
        myNotesDetails: notesDetails.value
    }
    notesObject.push(myNotes);
    localStorage.setItem('Notes', JSON.stringify(notesObject));
    notesTitle.value = '';
    notesDetails.value = '';
    showNotes();
}

//Display Notes
function showNotes() {
    let notesStorage = localStorage.getItem('Notes');
    if (notesStorage == null) {
        notesObject = [];
    } else {
        notesObject = JSON.parse(notesStorage);
    }
    let htmlCard = '';
    notesObject.forEach(function (element, index) {
        htmlCard += `<div class="card">
                    <h4>${element.myNotesTitle}</h4>
                    <p>${element.myNotesDetails}</p>
                    <button id="${index}" onclick="deleteNotes(this.id)">Delete Notes</button>
                    </div>`
    });
    let notesElement = document.getElementById('displayNotes');
    if (notesObject != 0) {
        notesElement.innerHTML = htmlCard;
    } else {
        notesElement.innerHTML = `<b>Notes is Empty<b>`
    }
}

//Delete Notes
function deleteNotes(index) {
    let notesStorage = localStorage.getItem('Notes');
    if (notesStorage == null) {
        notesObject = [];
    } else {
        notesObject = JSON.parse(notesStorage);
    }
    notesObject.splice(index, 1);
    localStorage.setItem('Notes', JSON.stringify(notesObject));
    showNotes();
}

//Search Notes
searchText.addEventListener('input', searchNotes)
function searchNotes() {
    let inputValue = searchText.value;
    let notesCard = document.getElementsByClassName('card');
    Array.from(notesCard).forEach(function (element) {
        let cardTitle = element.getElementsByTagName('h4')[0].innerText;
        let cardDetails = element.getElementsByTagName('p')[0].innerText;
        if (cardTitle.includes(inputValue) || cardDetails.includes(inputValue)) {
            element.style.display = 'inline-block';
        } else {
            element.style.display = 'none';
        }
    })
}
