/**
 * loops in js
 */
// for loop
for (var i = 0; i <= 20; i++) {
  // var
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  // let
  console.log(i);
}

[1, 2, 3, 4, 5, 6].forEach((item, index, all) => {
  console.log(item, index, all);
});

for (var i of [1, 2, 3, 4, 5, 6]) {
  // we can use var i | let i
  console.log(i);
}

for (let i in { fname: "sharath", lname: "mohan" }) {
  // we can use var i | let i
  console.log(obj[i]);
}

// break, continue keywords
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (i of array) {
  if (i == 3) continue;
  if (i == 7) break;
  console.log(i);
}
