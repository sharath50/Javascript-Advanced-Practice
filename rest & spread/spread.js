// spreading in js

// stores multiple args in array
function restFunction(name, age, gender, place) {
  console.log("spread ==> ", name, age, gender, place);
}

let info = ["sharath", 24, "male", "belur"];
restFunction(...info);
