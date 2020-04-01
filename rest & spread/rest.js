// special feature of javascript
// Rest parameters

// stores multiple args in array
function restFunction(...args) {
  console.log(args[0] + " should be name");
  console.log(args[1] + " should be age");
  console.log(args[2] + " should be place");
  console.log(args[3] + " should be gender");
}

restFunction("sharath", 24, "belur", "male", "hi");

let info1 = ["sharath", 24, "belur", "male"];
restFunction(...info1);

// in this bellow case js takes first argument as day
// and rest of them as args[array]
function restFunction2(day, ...args) {
  console.log("day ==> ", day);
  args.forEach(i => {
    console.log(i);
  });
}

restFunction2("monday", "sharath", 24, "belur", "male", "hi");
