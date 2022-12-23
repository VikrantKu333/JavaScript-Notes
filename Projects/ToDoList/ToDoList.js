function addToList() {
    titleToDo = document.getElementById('title').value;
    descriptionToDo = document.getElementById('description').value;
    if (localStorage.getItem('item') == null) {
        itemToDoArray = [];
        itemToDoArray.push([titleToDo, descriptionToDo]);
        localStorage.setItem('item', JSON.stringify(itemToDoArray));
    }
    else {
        itemToDoArrayString = localStorage.getItem('item');
        itemToDoArray = JSON.parse(itemToDoArrayString);
        itemToDoArray.push([titleToDo, descriptionToDo]);
        localStorage.setItem('item', JSON.stringify(itemToDoArray));
    }
    title.value = '';
    description.value = '';
    update();
}

function update() {
    if (localStorage.getItem('item') == null) {
        itemToDoArray = [];
        localStorage.setItem('item', JSON.stringify(itemToDoArray));
    }
    else {
        itemToDoArrayString = localStorage.getItem('item');
        itemToDoArray = JSON.parse(itemToDoArrayString);
    }
    tableData = document.getElementById("tableBody");
    let newData = "";
    itemToDoArray.forEach((element, index) => {
        newData += `
        <tr>
            <th>${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button onclick="deleted(${index})">Delete</button></td>
        </tr>`
    });
    tableBody.innerHTML = newData;
}

function deleted(itemIndex) {
    itemToDoArrayString = localStorage.getItem('item');
    itemToDoArray = JSON.parse(itemToDoArrayString);
    itemToDoArray.splice(itemIndex, 1);
    localStorage.setItem('item', JSON.stringify(itemToDoArray));
    update();
}

function clearList() {
    if (confirm("Do you really want to clear To Do List?")) {
        localStorage.clear();
        update();
    }
}