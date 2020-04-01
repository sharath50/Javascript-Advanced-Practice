/**
 * operators in js
 */
// + - * / %  ** = --x x++ x+=1 x-=1
var a = 1;
console.log(-a); // gives -1

var a = 10,
  b = 10 * 10;
console.log(a * b);

let s = "my" + "string";
console.log(s); // mystring

// in javascript it converts numbers to string (if it is + operator) in order to do concatination
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

// script runs from left to right, before js converts them to string it adds both numbers and then continuex
console.log(2 + 2 + "1"); // "41" and not "221"

// in javascript it converts string to numbers (if it is not addition) in order to do math operation
console.log(2 - "1"); // 1
console.log(1 * "1"); // 1
console.log("6" / "2"); // 3

// while doing addition, js automatically converts any data to string if neccessary
var boolean = true;
console.log(boolean + ""); // returns "true" it converted boolean to string format

console.log(+"25" + +"25"); // gives 50 because it converted string both 25's to numbers before do any operation
console.log(Number("25") + Number("25")); // 50

/**
 * complex operations
 */
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// " -9  " + 5 = " -9  5" // (3)
// " -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
