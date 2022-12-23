// = = = = = GET Request = = = = = 
// https://api.github.com/users
function getData() {
    console.log(" - - - - - - - - - - GET Request - - - - - - - - - - ");
    url = `https://api.github.com/users`;
    // GET request using fetch()
    fetch(url).then((response) => {
        // Converting received data to JSON
        return response.json();
    }).then((userData) => {
        // Create a variable to store HTML
        html = '<h2>GitHub Users</h2>';
        // Loop through each data and add
        userData.forEach(element => {
            html += `<div class="card">
                        <img src="${element.avatar_url}" alt="Image Not Found">
                        <a href="${element.html_url}"><b>@${element.login}</b></a>
                    </div>`;
        });
        // Display result
        informationData.innerHTML = html;
        console.log(userData);
    })
}

// = = = = = POST Request = = = = = 
// https://reqres.in
function postData() {
    console.log(" - - - - - - - - - - POST Request - - - - - - - - - - ");
    url = 'https://reqres.in/api/users';
    employee = {
        name: "Vikrant Patel",
        job: "Information Technology",
        salary: 25000
    }
    employeePost = {
        // Adding method type
        method: 'POST',
        // Adding header to the request
        headers: {
            'Content-Type': 'application/json'
        },
        // Adding body or contents to send
        body: JSON.stringify(employee)
    }
    // POST request using fetch()
    fetch(url, employeePost)
        // Converting to JSON
        .then(response => response.json())
        // Display result
        .then(employeeData => {
            informationData.innerHTML = `<div class="card">
                                            <b>Name - ${employeeData.name}</b>
                                            <p>Job - ${employeeData.job}</p>
                                            <p>Salary - ${employeeData.salary}</p>
                                            <p>ID - ${employeeData.id}</p>
                                            <p>Created At - ${employeeData.createdAt}</p>
                                        </div>`;
            console.log(employeeData);
        })
}