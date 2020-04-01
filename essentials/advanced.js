/**
 * using strict to enable strict mode && make js work in modern way
 */
// debugger;
"use strict";
// if you dont want your entire script modern way do like bellow
// in bellow case all codes should be inside the function
function forUseStrict() {
  "use strict";
  // start coding from here
  console.log("hello world");
}
/*forUseStrict() do not instatiate because we already mentioned user strict globally */

/**
 * important syntax errors in javascript
 */
// need to have ; at the end
console.log("hello");
console.log("hi");

// this is ok js adds ; at the end automatically
console.log("hello");
console.log("hi");

// this gives syntax error
console.log("All fine now");
// [1,2].forEach(console.log)

/**
 * comments in javascript
 */
// single line comments
console.log(1 + 2 + 3); // answer will be 6

// multiline or inline comment
console.log(1 + 10 + 12 /* twelve came two times */ + 12 + 56);

/**
 * scopes in js
 */
// function scope
(function() {
  // ----------------
  function car() {
    let message = "car function";
    let start = function() {
      // message can be accessible from parent scope
      // let is scope, it can be accessible by child functions
      console.log("1", message);
    };
    start();
  }
  car();

  function car2() {
    let message = "car2 function";
    let start = function() {
      message = "inside start";
      console.log("==>", message);
    };
    start();
    console.log("2", message);
  }
  car2();
})();

// block scope
(function() {
  // --------------
  let message = "outside block";
  if (true) {
    // this assignment will override the outside variable
    message = "inside block";
    console.log(message);
  }
  console.log(message);
})();

// IIFE's patterns
let app = (function() {
  // immediately invoked function expression
  // ------------------
  console.log("inside iife");
  return {};
})();
console.log(app);

// closures
let closureApp = (function() {
  // ------------
  console.log("inside iiff func");
  let carId = "123";
  let getId = function() {
    return carId;
  };
  return {
    getId: getId
  };
})();

console.log(closureApp.getId());

// string interpollation using %
// %s for a String
// %d for Number
// %i for Number
// %f for Floating points
// %o for an Object single line
// %O for an Object multiline
// %j for an JSON

console.log(
  "digit %d string %s object %O float %f json %j",
  45,
  "sha",
  { name: "sha" },
  1523.23,
  '{"name":"sha"}'
);

console.log(
  "digit %d string %s object %o int %i",
  45,
  "sha",
  { name: "sha" },
  12
);

// timing function in javascript...
let i = 0;
function texting() {
  i++;
  console.log(i);
  if (i < 10) {
    setTimeout(texting, 500);
  }
}
texting();

// clearing the time using clearTimeout
let i = 0;
function texting() {
  i++;
  console.log(i);
  let iter = setTimeout(texting, 500);
  if (i == 10) {
    clearTimeout(iter);
  }
}
texting();

// with passing some arguments to timing functions
let i = 0;
function texting(x) {
  i++;
  console.log(x);
  if (i == 10) {
    clearInterval(iter);
  }
}

let iter = setInterval(texting, 500, "hello");

// storage in js
localStorage.setItem();
sessionStorage.setItem();

localStorage.getItem();
sessionStorage.getItem();

sessionStorage.clear();
localStorage.clear();

// working with date objects...
var d = new Date(1973, 11, 09, 08, 35, 43, 0);
var d1 = new Date();

console.log(d1.getFullYear());
console.log(d1.getMonth());
console.log(d1.getDate());
list = [
  "sunday",
  "monday",
  "tuesday",
  "wednessday",
  "thursday",
  "friday",
  "saturday"
];
console.log(list[d1.getDay()]);
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());

//
