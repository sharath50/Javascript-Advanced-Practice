// JSON in js

/*
*** JSON methods
    JSON.parse()
    JSON.stringify
*/

// object
let person = {
  name: "sharath",
  age: 24
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

// array
let people = [{ name: "sharath" }, { name: "mohan" }, { name: "kiran" }];

console.log(JSON.stringify(people));

// string format
// keys should be double quoted
let students = `
    [
        {"id":100},
        {"id":104},
        {"id":112},
        {"ids" : [111, 109, 103]}
    ]
`;

console.log(JSON.parse(students));
