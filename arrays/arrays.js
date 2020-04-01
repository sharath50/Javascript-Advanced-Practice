// arrays in javascript
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr = new Array(1, 2, 3, 4, 5);
console.log(array, arr);

// rest operator in js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(...arr);

let name = "hello";
console.log(...name);

// array destructuring in js
let cars = ["bmw", "benz", "audi"];

// take each item and assigns into variable
let [car1, car2, car3] = cars;
console.log(car1, car2, car3);

// assigns first item to first variable
// rest oprrator is used to take remaining items as array
let [carOne, ...remainingCars] = cars;
console.log(carOne, remainingCars);

// we can skip as many items we want, using comma like bellow
let [, , ...remainingCars2] = cars;
console.log(remainingCars2);

// array iteration
let names = ["sharath", "mohan", "kiran", "anil", "suhas"];

for (i of names) {
  console.log(i);
}

/*
    forEach
    map
    filter
    reduce
    sort
    every
    find
*/

names.forEach((element, index, full) => {
  console.log(element);
});

let mapped = names.map(element => {
  return element + " * ";
});
console.log(mapped);

// filter takes out the elements(array) which matched the condition
let filtered = names.filter(element => element.startsWith("s"));
console.log(filtered);

let carIds = [
  { carId: 123, style: "sedan" },
  { carId: 456, style: "convertible" },
  { carId: 789, style: "hachback" }
];

// evety is used to test whether each item matches the condition or not
let everyApplied = carIds.every(element => element.carId > 12);
console.log(everyApplied);

let nums = [1, 6, 7, 8, 9, 2, 0, 10, 5, 0];
let reduced = nums.reduce((element, acc) => acc + element, 10);
console.log(reduced);

// find is used to find the first value which matches the condition
let found = nums.find(element => element % 2 == 0);
console.log(found);

// sorted string
var sorted = names.sort();
console.log(sorted);

// sort items in numberd format
var sorted = nums.sort((a, b) => {
  return a - b;
});
console.log(sorted);

var reversed = nums.reverse();
console.log(reversed);
