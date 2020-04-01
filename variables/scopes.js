/**
 * variable scopes in js
 */
// let
let userName;
userName = "sharath mohan";
console.log(userName);

function funcLet() {
  let userName = "username inside func";
  console.log(userName);
}
funcLet();

// const
// const address; we can't declare empty variable using const
const address = "address here"; // cannot be redefined and specific to current scope
console.log(address);

function funcConst() {
  const address = "address inside func";
  console.log(address);
}
funcConst();

//var
var general;
var general = "general info"; // cannot be redefined and specific to current scope
console.log(general);

var general = "another general info";
console.log(general); // we can redeclare var scope variable names

function funcVar() {
  general = "general info inside func"; // var can access from anywhere because it is global scope
  console.log(general);
}
funcVar();

console.log(general); // and the value changes, because the can be redeclare, can change value, & are in gloval scope
