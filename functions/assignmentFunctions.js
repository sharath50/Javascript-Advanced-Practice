// assignment functions in js
let func1 = function() {
  return "hello form func1";
};

console.log(func1());

// we can't call assignemnt functions before declaration
// console.log(func2()); // Error

let func2 = function() {
  return "hello from func2";
};

console.log(func2()); // works
