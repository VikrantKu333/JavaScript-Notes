// Character Classes
console.log(" - - - - - - - - - - Character Classes - - - - - - - - - - ");
text = 'Candy vik_sh ghost. milk863902_vinod bird rohi6789 pencil goat. 5uraj nir@j Laptop C0mputer Thanks.';
console.warn('Character Classes Example - ', text);

regExp = /b.rd/;                    //  .       Matches Any Character
check = regExp.exec(text);
console.log(check);

regExp = /vik\w/;                   //  \w      Matches any alphanumeric character and including the "_" underscore
check = regExp.exec(text);
console.log(check);

regExp = /nir\W/;                   //  \W      Does not Matches any alphanumeric character and including the "_" underscore 
check = regExp.exec(text);
console.log(check);

regExp = /rohi\d/;                  //  \d      Matches any digit
check = regExp.exec(text);
console.log(check);

regExp = /pen\D/;                   //  \D      Does not Matches any digit
check = regExp.exec(text);
console.log(check);

regExp = /Candy\s/;                 //  \s      Match a single white space character, including space, tab, form feed, line feed, and other Unicode spaces
check = regExp.exec(text);
console.log(check);

regExp = /ghos\S/;                  //  \S      Does not Match a single white space character, including space, tab, form feed, line feed, and other Unicode spaces
check = regExp.exec(text);
console.log(check);

regExp = /mil\w+/;                  //  \w+     Matches one or more alphanumeric character and including the "_" underscore
check = regExp.exec(text);
console.log(check);

regExp = /\./g;                     //  \.      Allow Dot "." Character
check = text.match(regExp);
console.log(check);

// Quantifiers
console.log(" - - - - - - - - - - Quantifiers - - - - - - - - - - ");
text = 'boooo, A ghost booooed, A bird warbled, A goat grunted. candy, caandy, caaaaandy, caaaaaaandy. Thanks';
console.warn('Quantifiers Example - ', text);

regExp = /o*ed/g;               //  *       This character allow zero or more preceding item
check = text.match(regExp);
console.log(check);

regExp = /o+ed/g;               //  +       This character allow one or more preceding item
check = text.match(regExp);
console.log(check);

regExp = /o?ed/g;               //  ?       This character allow zero or one preceding item
check = text.match(regExp);
console.log(check);

regExp = /a{2}ndy/g;            //  {n}     This character allow "n" times preceding item. "n" is a positive integer.
check = text.match(regExp);
console.log(check);

regExp = /a{2,}ndy/g;           //  {n,}    This character allow "n" or more times preceding item. "n" is a positive integer.
check = text.match(regExp);
console.log(check);

regExp = /a{1,3}ndy/g;          //  {n,m}   This character allow  "n" or "m" times preceding item. "n" & "m" is a positive integer and "n" < "m".
check = text.match(regExp);
console.log(check);

// Assertions
console.log(" - - - - - - - - - - Assertions - - - - - - - - - - ");
text = 'I will be in the room in 10 minutes.';
console.warn('Assertions Example - ', text);

regExp = /^I/;                      //  ^       Start With
check = regExp.exec(text);
console.log(check);

regExp = /minutes.$/;               //  $       End With
check = regExp.exec(text);
console.log(check);

regExp = /the\b/;                   //  \b      Matches a word boundary
check = regExp.exec(text);
console.log(check);

regExp = /roo\B/;                   //  \B      Matches a non-word boundary
check = regExp.exec(text);
console.log(check);

regExp = /minute(?=s)/;             //  x(?=y)  Lookahead assertion: Matches "x" only if "x" is followed by "y"
check = regExp.exec(text);
console.log(check);

regExp = /min(?!u)/;                //  x(?!y)  Negative lookahead assertion: Matches "x" only if "x" is not followed by "y"
check = regExp.exec(text);
console.log(check);

// Groups and Ranges
console.log(" - - - - - - - - - - Groups and Ranges - - - - - - - - - - ");
text = 'Red Green Blue Pink Yellow Black White';
console.warn('Groups and Ranges Example - ', text);

regExp = /Pink|Gray/;           //  x|y             Matches either "x" or "y"       
check = regExp.exec(text);
console.log(check);

regExp = /Y[a-z]llow/;          //  [a-z]           Matches any one of the enclosed characters in "a" to "z"
check = regExp.exec(text);
console.log(check);

regExp = /Y[^a-z]llow/;         //  [^a-z]          Does not Matches any one of the enclosed characters in "a" to "z"
check = regExp.exec(text);
console.log(check);

regExp = /Y[ieo]llow/;          //  [xyz]           Matches any one of the enclosed characters in "x", "y" & "z"
check = regExp.exec(text);
console.log(check);

regExp = /Y[^ieo]llow/;         //  [^xyz]          Does not Matches any one of the enclosed characters in "x", "y" & "z"
check = regExp.exec(text);
console.log(check);

regExp = /[a-zA-Z0-9]lue/;      //  [a-zA-Z0-9]     Matches any one of the enclosed characters in range
check = regExp.exec(text);
console.log(check);

text = 'Technology TechTechTech Tech Technical TechTech ';
regExp = /(Tech){2}/;           //  (x){n}          Grouping "x" and "n" times
check = regExp.exec(text);
console.log(check);

