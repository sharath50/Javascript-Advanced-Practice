// error handling in js

let name = "sharath";

try {
  console.log(name);
  console.log(age);
} catch (err) {
  console.log(err.name);
} finally {
  console.log("operation completed");
}

// custom error throwing
try {
  // -- try some operation
  let age;
  if (!age) {
    throw new Error("error msg here");
  }
  console.log(age);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
} finally {
  console.log("operation completed");
}
