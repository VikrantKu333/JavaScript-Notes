let elementSection = document.getElementsByTagName('section');
let elementDiv = document.createElement("div");
let elementInput = document.createElement('input');
let elementText = document.createTextNode(' This is Text Nods');

//Add a className and id to the element
elementDiv.className = 'card';
elementDiv.id = 'cardInfo';
elementDiv.innerText = 'This is Card';

elementInput.setAttribute('placeholder', 'Search');
//elementInput.removeAttribute('placeholder');
console.log(elementInput.getAttribute('placeholder'));
console.log(elementInput.hasAttribute('placeholder'));

elementSection[0].appendChild(elementDiv);
elementSection[0].appendChild(elementInput);

//elementSection[0].replaceChild(elementText,elementInput);

//elementSection[0].removeChild(elementInput);

// elementInput.replaceWith(elementText);

console.log(elementSection[0]);
console.log(elementDiv);
console.log(elementInput);
console.log(elementText);




