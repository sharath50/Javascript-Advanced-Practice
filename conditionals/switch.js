/**
 * switch statement in js
 */
var a = 2 + 3;

switch (a) {
  case 3:
    console.log("Too small"); // if (x === 'Too small') switch uses strict comparison
    break;

  case 4:
    console.log("Exactly!"); // if (x === 'Exactly!')
    break;

  case 5:
    console.log("Too large");
    break;

  default:
    console.log("I don't know such values");
}

// If there is no break then the execution continues with the next case without any checks.
var a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
  case 4:
    console.log("Exactly!");
  case 5:
    console.log("Too big");
  default:
    console.log("I don't know such values");
}

// Both "switch" and "case" allow arbitrary expressions.
var a = "1";
var b = 0;

switch (+a) {
  case b + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}

// Several variants of case which share the same code can be grouped.
// For example, if we want the same code to run for case 3 and case 5:
var a = 2 + 2;

switch (a) {
  case 4:
    alert("Right!");
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;

  default:
    alert("The result is strange. Really.");
}

// using if , else statements

var browser = "safari";
switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

var a = prompt("a?", "");

switch (++a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}
