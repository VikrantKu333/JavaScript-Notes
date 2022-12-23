//JavaScript Events

window.onload = function () {
    console.log("The document was loaded");
}

firstContainer.addEventListener('click', function () {
    console.log("Clicked on Container");
})

firstContainer.addEventListener('mouseover', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<p>Mouse on Container</p>";
})

firstContainer.addEventListener('mouseout', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<p>Mouse out of Container</p>";
})

firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<p>Mouse up when clicked on container</p>";
})

firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<p>Mouse down when clicked on container</p>";
})

//JavaScript Timing Events

//let _timeout = setTimeout(set_timeout, 2000);
function set_timeout() {
    document.getElementById("timeOut").innerHTML = "This is Time Out";
}

//let _interval = setInterval(set_interval, 1000);
function set_interval() {
    const myDate = new Date();
    document.getElementById("myTime").innerHTML = myDate.toLocaleTimeString();
}

secondContainer.addEventListener('click', function (e) {
    console.log("Element : ", e);
    console.log("Element Target : ", e.target);
    console.log("Element Target ID : ", e.target.id);
    console.log("Element Target Class Name : ", e.target.className);
    console.log("Element Target Class List : ", e.target.classList);
    console.log("Element Target Class List Array : ", Array.from(e.target.classList));
    console.log("Offset X : ", e.offsetX);
    console.log("Offset Y : ", e.offsetY);
    console.log("Client X : ", e.clientX);
    console.log("Client Y : ", e.clientY);
    e.preventDefault();
})

thirdContainer.addEventListener('dblclick', function () {
    console.log('Thanks to double click in third container');
})

thirdContainer.addEventListener('mouseenter', function () {
    console.log('Thanks to enter in third container');
})

thirdContainer.addEventListener('mouseleave', function () {
    console.log('Thanks to leave in third container');
})

//Background Color Change
bodyContainer.addEventListener('mousemove', function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log('X ', x, 'Y ', y);
    bodyContainer.style.backgroundColor = `rgb(${x}, ${y}, ${x + y})`;
})

