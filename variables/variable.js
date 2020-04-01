/**
 * variable in js
 */
// good
var $variable;
var _variable;
var vari555able, variable10;

// bad variable - should not start with any number or symbol except above
/*
var 5varkd
var *djdjjd 
var var&&&able
*/

var variable; // declaring a variablew with var , let scope
variable = "value"; // assigning value

// can declare all in one line comma seperated
var name = "name",
  age = "age",
  place = "place";
console.log(name);
console.log(age);
console.log(place);

// chaining declaration
var a = (b = c = 10);
console.log(a);
console.log(c);
console.log(b);

// reassigning values
var variable1 = "value1"; // now variable1 is "value1"
variable1 = "changed value"; // now variable1 is "changed value"

// can perform math operation while declaring ad assigning values to variables
var a = 0;
var b = a;
var c = a + b;

// complex assigning with math operation
var b = 1;
var c = 3 - (a = b + 1); // here = sign not only assigning the value it also returns the value
