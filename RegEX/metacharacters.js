/*
    *** meta characters 

    .	Find a single character, except newline or line terminator
    \w	Find a word character
    \W	Find a non-word character
    \d	Find a digit
    \D	Find a non-digit character
    \s	Find a whitespace character
    \S	Find a non-whitespace character
    \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
    \B	Find a match, but not at the beginning/end of a word
    \0	Find a NUL character
    \n	Find a new line character
    \f	Find a form feed character
    \r	Find a carriage return character
    \t	Find a tab character
    \v	Find a vertical tab character
    \xxx	Find the character specified by an octal number xxx
    \xdd	Find the character specified by a hexadecimal number dd
    \udddd	Find the Unicode character specified by a hexadecimal number dddd
*/

// . is used to find match which starts from 'h' ends with 't'
var str = "That's hot!";
var result = str.match(/h.t/g);
console.log(result);

// \w is used to take out the worlds only [ a-z, A-Z, 0-9, _ ]
// \W is can be used to take non-worlds
var str = "Give 100%!";
var result = str.match(/\w/g); // new RegExp("\\w") use one more '\' to escape the '\'
var result1 = str.match(/\W/g);
console.log(result, result1);

// \d , \D  to take out digit[0-9] and non-digit[0-9]
var str = "Give 100%!";
var result = str.match(/\d/g);
var result1 = str.match(/\D/g);
console.log(result, result1);

// \s , \S to take out space and non-space
var str = "Is this all there is?";
var result = str.match(/\s/g);
var result1 = str.match(/\S/g);
console.log(result, result1);

// \s , \S to take out [ space, tab, newline ] and non[ space, tab, newline ]
var str = "Is this all there is?";
var result = str.match(/\s/g);
var result1 = str.match(/\S/g);
console.log(result, result1);

//

var name = "hi, this is sharath mohan!, how you guys are doing...";
