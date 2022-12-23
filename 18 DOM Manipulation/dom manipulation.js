/*
JavaScript DOM Selectors
1. Single Element Selectors
2. Multi Element Selectors
*/

// Single Element Selectors
console.log(" - - - - - - - - - - Find an element by element id - - - - - - - - - - ");
let elementID = document.getElementById('clickRed');                //Find an element by element id
console.log(elementID);
console.log(elementID.className);
console.log(elementID.children);
console.log(elementID.childNodes);
console.log(elementID.parentNode);
console.log(elementID.innerHTML);
console.log(elementID.innerText);

// Multi Element Selectors
console.log(" - - - - - - - - - - Find elements by class name - - - - - - - - - - ");
let elementClass = document.getElementsByClassName("container");    //Find elements by class name
console.log(elementClass);
console.log(elementClass[0].innerHTML);
console.log(elementClass[0].innerText);

// DOM Manipulation
elementClass[0].style.borderRadius = "15px";
elementClass[0].classList.add("bg-primary");
elementClass[0].classList.add("text-success");

// Multi Element Selectors
console.log(" - - - - - - - - - - Find elements by tag name - - - - - - - - - - ");
let elementTag = document.getElementsByTagName("section");          //Find elements by tag name
console.log(elementTag);

// Create HTML element and append child
let createdElement1 = document.createElement('p');
createdElement1.innerText = "This ia a created Paragraph";
elementTag[0].appendChild(createdElement1);

// Create HTML element and replace child
let createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created Bold";
elementTag[0].replaceChild(createdElement2, createdElement1);

// Navigating Between Nodes
console.log(" - - - - - - - - - - Navigating Between Nodes - - - - - - - - - - ");
let list = document.getElementById("drink");
console.log(list);
console.log(list.firstChild);
console.log(list.lastChild);
console.log(list.parentNode);
console.log(list.childNodes);
console.log(list.childNodes[1].nodeName);
console.log(list.childNodes[1].nodeType);
//list.removeChild(list.firstElementChild);
//list.removeChild(list.childNodes[3]);
//list.remove();

// JavaScript Query Selectors (JavaScript DOM Selectors)
console.log(" - - - - - - - - - - JavaScript Query Selectors - - - - - - - - - - ");
let selectQuery_1 = document.querySelector('.container-fluid');         //#idName, .className, tagName
console.log(selectQuery_1);
let selectQuery_2 = document.querySelectorAll('.container-fluid');      //#idName, .className, tagName
console.log(selectQuery_2);

/*
Node type	
1	Element	
2	Attr	
3	Text	
4	CDATASection	
5	EntityReference	
6	Entity	
7	ProcessingInstruction	
8	Comment	
9	Document	
10	DocumentType	
11	DocumentFragment	
12	Notation
*/