const imgBox = document.querySelector('.imageBox');
const boxes = document.getElementsByClassName('box');

console.log(imgBox);
console.log(boxes);

imgBox.addEventListener('dragstart', (e) => {
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imageBox';
});

for (const element of boxes) {
    element.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    element.addEventListener('dragenter', (e) => {
        e.target.className += ' enter';
    });
    element.addEventListener('dragleave', (e) => {
        e.target.className = 'box';
    });
    element.addEventListener('drop', (e) => {
        e.target.appendChild(imgBox);
    });
}