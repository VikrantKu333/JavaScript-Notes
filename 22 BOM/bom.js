//Browser Object Model (BOM)

let objectReturn;

// alert('This is Window Alert');

// objectReturn = confirm('This is Window Confirm');
// console.log(objectReturn);

// objectReturn = prompt('This is Window Prompt');
// console.log(objectReturn);


objectReturn = window;
console.log('Window ', objectReturn);

objectReturn = window.document;
console.log('Window Document ', objectReturn);

objectReturn = innerHeight;
console.log('Inner Height ', objectReturn);

objectReturn = innerWidth;
console.log('Inner Width ', objectReturn);

objectReturn = outerHeight;
console.log('Outer Height ', objectReturn);

objectReturn = outerWidth;
console.log('Outer Width ', objectReturn);

objectReturn = scrollX;
console.log('Scroll X', objectReturn);

objectReturn = scrollY;
console.log('Scroll Y', objectReturn);

objectReturn = location;
console.log('Location ', objectReturn);

objectReturn = location.toString();
console.log('Location in String ', objectReturn);

objectReturn = history;
console.log('History ', objectReturn);

//location.reload;
//location.href;
//location.href='//google.com';

