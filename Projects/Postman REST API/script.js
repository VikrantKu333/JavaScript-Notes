//GET Button Link
get_link.addEventListener('click', () => {
    REST_URL.value = 'https://jsonplaceholder.typicode.com/posts/1';
    REST_Option.value = 'GET';
    rest();
})
//POST Button Link
post_link.addEventListener('click', () => {
    REST_URL.value = 'https://jsonplaceholder.typicode.com/posts';
    REST_Option.value = 'POST';
    rest();
    requestData.value = `{
                            "Name": "Vikrant Patel",
                            "Age": 25,
                            "Job": "Developer",
                            "Salary": 25000
                        }`
})
//GET & POST Option
function rest() {
    if (REST_Option.value == 'POST') {
        request.style.display = 'block';
    } else {
        request.style.display = 'none';
    }
}
rest();
//Send Button
restSend.addEventListener('click', () => {
    const rest_url = REST_URL.value;
    const rest_type = REST_Option.value;
    const rest_data = requestData.value;
    if (rest_type == 'GET') {
        fetch(rest_url)
            .then(response => response.text())
            .then(text => {
                responseData.innerHTML = text;
                Prism.highlightAll();
            });
    } else {
        fetch(rest_url, {
            method: 'POST',
            body: rest_data,
            headers: { "Content-Type": "application/json; charset=UTF-8" }
        })
            .then(response => response.text())
            .then(text => {
                responseData.innerHTML = text;
                Prism.highlightAll();
            });
    }
})