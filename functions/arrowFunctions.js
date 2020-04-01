// different styles of arrow functions

// if we are in same line then no need to use return keyword
let arrow1 = () => "function 1 ";

console.log(arrow1());

// if we have no arguments then we can use () or _ to represent no arguments
let arrow2 = _ => "function 2 ";

console.log(arrow2());

// if we only one argument no need of parenthisis
let arrow3 = name => "name is " + name;

console.log(arrow3("sharath"));

// if we have more than one argument we need to add parenthisis
let arrow4 = (name, age) => name + " is " + age;

console.log(arrow4("sharath", 24));

// if we are in multiline then we need to use return keyword
let arrow5 = () => {
  return true;
};

console.log(arrow5());
