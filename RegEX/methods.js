/*
    *** modifiers

    g - perform blobal matching, rather than stoping after first match
    i - perform case-sensitive matching
    m - perform multiline matching
*/

/*
    *** RegExp Object Methods
    String.match()  match is the method of String object 
    String.replace() replace is a method of string object
    exec()	Tests for a match in a string. Returns the first match
    test()	Tests for a match in a string. Returns true or false
    toString()	Returns the string value of the regular expression
*/

// gives the match
var str = "That's hot!";
var result = str.match(/h.t/g);
console.log(result);

// by using replace method of string in js
// we can replace all matches by using 'g' identifier
let greet = "hello world";
modGreet = greet.replace(/l/gi, "s");
console.log(modGreet);

// exec method is used for search the string for match
// returns first match if found the match, otherwise null
let details = "his name is rama, he is 18";
var exp = new RegExp("i", "g");
var result = exp.exec(details);
console.log(result);

// test method is used to check the string for match
// returns true if found the match, otherwise false
let name = "sharath is my name";
var exp = new RegExp("sharath");
var result = exp.test(name);
console.log(result);

// to return the string value of RegEx
var exp = new RegExp("sha", "gi");
var result = exp.toString();
console.log(result);
