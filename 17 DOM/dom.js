//Document Object Model (DOM)

// Finding HTML Objects
console.log("\n - - - - - - - - - - Finding HTML Objects - - - - - - - - - - \n\n");
console.log("Document : ", document);                       //Return the document's
console.log("Document Location : ", document.location);     //Return the document's location
console.log("Document Title : ", document.title);           //Returns the <title> element
console.log("Document Head : ", document.head);             //Returns the <head> element
console.log("Document Body : ", document.body);             //Returns the <body> element
console.log("Document URL : ", document.URL);               //Returns the complete URL of the document
console.log("Document Domain : ", document.domain);         //Returns the domain name of the document server
console.log("Document Scripts : ", document.scripts);       //Returns all <script> elements
console.log("Document Links : ", document.links);           //Returns all <area> and <a> elements that have a href attribute
console.log("Document Forms", document.forms);              //Returns all <form> elements
console.log("Document Images : ", document.images);         //Returns all <img> elements
console.log("Document Cookie : ", document.cookie);         //Returns the document's cookie

let allLinks = document.links;

// HTML Element Iterate First Method
console.log("\n - - - - - - - - - - HTML Element Iterate First Method - - - - - - - - - - \n\n");
Array.from(allLinks).forEach(function (element) {
    console.log(element);
})

// HTML Element Iterate Second Method
console.log("\n - - - - - - - - - - HTML Element Iterate Second Method - - - - - - - - - - \n\n");
for (let index = 0; index < allLinks.length; index++) {
    const element = allLinks[index];
    console.log(element);
}

// Finding HTML Elements by CSS Selectors
console.log("\n - - - - - - - - - - Finding HTML Elements by CSS Selectors - - - - - - - - - - \n\n");
console.log("Query Selector By Tag Name : ", document.querySelector('li'));
console.log("Query Selector All By Tag Name : ", document.querySelectorAll('li'));

console.log("Query Selector By Class Name : ", document.querySelector('.navItem'));
console.log("Query Selector All By Class Name : ", document.querySelectorAll('.navItem'));

console.log("Query Selector By ID Name : ", document.querySelector('#navigation'));
console.log("Query Selector All By ID Name : ", document.querySelectorAll('#navigation'));
