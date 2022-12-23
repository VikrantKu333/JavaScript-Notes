// GET Request File
function loadContent() {
    console.log(" - - - - - - - - - - GET Request File - - - - - - - - - - ");
    // Create an XMLHttpRequest (XHR) object
    const xhr = new XMLHttpRequest();
    // What to do when the response is progress (Optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }
    // What to do when the response is ready
    xhr.onload = function () {
        dataContent.innerHTML = this.responseText;
        console.log(this.responseText);
    }
    // To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object
    // GET Request Local File
    xhr.open('GET', 'ajax_info.txt', true);
    xhr.send();
}



// GET Request Server / Web Page
function getContent() {
    console.log(" - - - - - - - - - - GET Request Server / Web Page - - - - - - - - - - ");
    // Create an XMLHttpRequest (XHR) object
    const xhr = new XMLHttpRequest();
    // What to do when the response is progress (Optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }
    // What to do when the response is ready
    xhr.onload = function () {
        let dataReceive = JSON.parse(this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            dataContent.innerHTML = `<div class="post">
                                        <h2><span style='color:gray'>Title - </span>${dataReceive.title}</h2>
                                        <p><span style='color:gray'>User Id - </span>${dataReceive.userId}</P>
                                        <p><span style='color:gray'>Id - </span>${dataReceive.id}</p>
                                        <article><span style='color:gray'>Article - </span>${dataReceive.body}</article>
                                    </div>`;
            console.log(this.responseText);
            console.log(dataReceive);
        }
    }
    // To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object
    // GET Request Web Page
    // https://jsonplaceholder.typicode.com
    // https://github.com/typicode/json-server
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.send();
}



// POST Request Server / Web Page
function postContent() {
    console.log(" - - - - - - - - - - POST Request Server / Web Page - - - - - - - - - - ");
    // Create an XMLHttpRequest (XHR) object
    const xhr = new XMLHttpRequest();
    // What to do when the response is progress (Optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }
    // What to do when the response is ready
    xhr.onload = function () {
        dataContent.innerHTML = this.responseText;
        console.log(JSON.parse(this.responseText));
    }
    // To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object
    // POST Request Web Page
    // https://reqbin.com
    // https://reqbin.com/req/4rwevrqh/post-json-example
    xhr.open('POST', 'https://reqbin.com/echo/post/json', true);
    customerData = `  {
                        "Id": 78912,
                        "Customer": "Jason Sweet",
                        "Quantity": 1,
                        "Price": 18.00
                    }`
    xhr.send(customerData);
}