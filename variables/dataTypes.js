/**
 * data types in js
 */
var value = "string";
value = 123456; // gives no error because, dynamically typed

// string
var string = " ";
var string = " ";
var string = `can embed another ${str}`;

// number
var intiger = 10 || 0;
var intiger = 10.5 || 0.1;
var intiger = Infinity || -Infinity; // 1 / 0 is infinity
var intiger = NaN; // "string" / 2 is NaN means 'not a number'

// BigInt -- type was recently added to the language to represent integers of arbitrary length.
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// boolean
var boolean = true || false;

// array
var array = [1, 2, 3, 4, 5],
  array = Array(1, 2, 3, 4, 5),
  array = new Array(1, 2, 3, 4, 5);

//object
var object = { name: "sharath" },
  object = Object({ name: "sharath" }),
  object = new Object({ name: "sharath" });

// symbol
var uniqueValue = Symbol("id");

// null
var emptyValue = null;

// undefined
var notAssignedYet = undefined;

/**
 * The typeof operator returns the type of the argument. It’s useful when we want to process
 * values of different types differently or just want to do a quick check.
 */
typeof undefined; // "undefined"
typeof 0; // "number"
typeof NaN; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)
typeof {}; // "object"
typeof []; // "object"

/**
 * type conversion in js
 */
var convertedValue = Number("12562");
var convertedValue = Number.parseInt("5623.18"); // 5623
var convertedValue = Number.parseFloat("4526.12"); // 4526.12
var convertedValue = String(10023);
var num = 45262;
num.toString();
var convertedValue = Boolean(" ");

var convertedValue = Boolean("NaN"); // true because it is treated as string
var convertedValue = Boolean(NaN); // false because it treated as NaN
// same rule applies to null and undefined

var convertedValue = Number(NaN); // is NaN because NaN is already number
var convertedValue = Number(true); // 1 because 1 is 'true' and 0 is 'false'
