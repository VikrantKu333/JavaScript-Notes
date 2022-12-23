// Regular Expression
regExp = /Google/;
console.log(regExp);
console.log(regExp.source);

// Method
console.log(" - - - - - - - - - - Method - - - - - - - - - - ");
text = 'Visit Wikipedia and Wikisource';
console.warn('Method Example - ', text);

check = text.search(/Wikipedia/);                       //Return index of first match else -1
console.log(check);

check = text.replace(/wikipedia/i, 'Wiktionary');       //Return New String
console.log(check);

check = text.match(/wiki/ig);                           //Return an Array of matches or Null
console.log(check);

regExp = /to/g;
text = 'I will go to Delhi to meet my friend.';

check = regExp.exec(text);                              //Return an Array or Null
console.log(check);
if (check) {
    console.log(check.index);
    console.log(check.input);
}
check = regExp.exec(text);
console.log(check);
check = regExp.exec(text);
console.log(check);

check = regExp.test(text);                              //Return true or false
console.log(check);



