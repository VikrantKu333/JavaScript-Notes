// = = = String Methods = = =
let colorSentence = "   color Red looks brighter than color Blue.   ";
let textPadding = "5";
console.log(colorSentence.length);                          //Find String length
console.log(colorSentence.indexOf("color"));                //Find First Index
console.log(colorSentence.lastIndexOf("color"));            //Find Last Index
console.log(colorSentence.toLowerCase());                   //Converting a String to Lowercase
console.log(colorSentence.toUpperCase());                   //Converting a String to Uppercase
console.log(colorSentence.trim());                          //Removes whitespace from both sides of a string
console.log(textPadding.padStart(4, 0));                    //String Padding Start "0005"
console.log(textPadding.padEnd(4, 0));                      //String Padding End "5000"
let colorReplace = colorSentence.replace("Blue", "Green");  //Replace String
console.log(colorReplace, colorSentence);                   //Print New Sentence and Old Sentence
console.log(colorSentence.slice(3, 12));                    //Extracts a part of a string and returns the extracted part in a new string
console.log(colorSentence.substring(3, 12));                //Similar to slice(). The different is that substring() cannot accept negative indexes
console.log(colorSentence.split(' '));                      //Converting a string to an array
console.log(colorSentence.charAt(9));                       //Returns the character at a specified index in a string
console.log(colorSentence.charCodeAt(9));                   //Returns the ASCII character code at a specified index in a string
console.log(colorSentence[9]);                              //Similar to charAt()
console.log(colorSentence.startsWith('   color'));          //The startWith() method returns true if a string start with a specified string. Otherwise it returns false
console.log(colorSentence.includes('Red'));                 //The includes() method returns true if a string contains a specified string. Otherwise it returns false
console.log(colorSentence.endsWith('Blue.   '));            //The endWith() method returns true if a string ends with a specified string. Otherwise it returns false
console.log(colorSentence.concat('You are Right.'));        //Joins two or more strings
