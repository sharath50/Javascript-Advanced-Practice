// Math properties
console.log("E", Math.E);
console.log("LN10", Math.LN10);
console.log("LN2", Math.LN2);
console.log("LOG10E", Math.LOG10E);
console.log("LOG2E", Math.LOG2E);
console.log("PI", Math.PI);
console.log("SQRT1_2", Math.SQRT1_2);
console.log("SQRT2", Math.SQRT2);

// Math methods
let arr = [1, 2, 3, 4, 5, 6];
// used spread operator to spread the array
let max = Math.max(...arr);
console.log(max);

// Date Object
let d = new Date(0); // jan 1 1970
// format : 1970-01-01T00:00:00.000Z
console.log(d);
console.log(Date.now()); // current date in milliseconds

// passing in string format
let customDate = new Date("2020 02 29");
console.log(customDate);

// passing as parameters
let otherWay = new Date(2020, 1, 29, 16, 09, 45);
console.log(otherWay);
