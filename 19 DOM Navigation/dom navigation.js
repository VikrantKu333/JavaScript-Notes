console.log(" - - - - - - - - - -   +   - - - - - - - - - - ");
let selectElement = document.getElementById("content");
console.log(selectElement);
console.log(selectElement.childNodes);
console.log(selectElement.children);
console.log(selectElement.childElementCount);
console.log(selectElement.childNodes[1].nodeName);
console.log(selectElement.childNodes[1].nodeType);

console.log(" - - - - - - - - - -   +   - - - - - - - - - - ");
console.log(selectElement.firstChild);
console.log(selectElement.firstElementChild);

console.log(" - - - - - - - - - -   +   - - - - - - - - - - ");
console.log(selectElement.lastChild);
console.log(selectElement.lastElementChild);

console.log(" - - - - - - - - - -   +   - - - - - - - - - - ");
console.log(selectElement.firstElementChild.parentNode);
console.log(selectElement.firstElementChild.nextSibling);
console.log(selectElement.firstElementChild.nextElementSibling);
console.log(selectElement.firstElementChild.nextElementSibling.nextElementSibling);

/*
The most important nodeType properties are:
Node	                Type

ELEMENT_NODE	        1	
ATTRIBUTE_NODE	        2	
TEXT_NODE	            3	
COMMENT_NODE	        8	
DOCUMENT_NODE	        9	
DOCUMENT_TYPE_NODE	    10	
*/