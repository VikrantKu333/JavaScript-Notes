// Image Upload
uploadImage.addEventListener('submit', () => {
    let imageFile = document.querySelector('#imageFile').files[0];

    let reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load', function () {
        if (this.result && localStorage) {
            let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
            imagesList.push(this.result);
            localStorage.setItem('images', JSON.stringify(imagesList));
        }
    });
});

// Display Image
function displayImage() {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if (imagesList.length !== 0) {
        let cardImage = `<button id="imageRemoveAll">Remove All</button><hr>`;
        for (let image of imagesList) {
            cardImage += `<div class="card">
                            <img src="${image}" alt="Image Not Found">
                        </div>`;
        }
        showImage.innerHTML = cardImage;
    }
}
displayImage();

// Image Remove All
imageRemoveAll.addEventListener('click', function () {
    localStorage.removeItem('images');
    location.reload();
});