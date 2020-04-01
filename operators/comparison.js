// logical operators in js

/*
    && and
    & and
    || or
    | or
    ^ xor
    ! not
*/

if ((true && true) || false) {
  console.log(
    "OR means atleast any one should be true, if both are true also fine"
  );
  console.log("AND means both should be true");
}

if (!true ^ true) {
  console.log("XOR means any one should be true not both");
}

if (!false) {
  console.log(
    " NOT converts everything opposite, true to false, false to true"
  );
}

// relational operators
/*
    > greater than
    < less than
    >= greate than or equal to
    <= less than or equal to
*/

console.log(1 > 0); // true
console.log(10 < 5); // true
console.log(10 >= 20); // false
console.log(25 >= 25); // true

// not sure about these things
/*
    NOT ( ~ )
    LEFT SHIFT ( << )
    RIGHT SHIFT ( >> )
    ZERO-FILL RIGHT SHIFT ( >>> )
*/

// turnary operators
// result = true ? "this prints" : "otherwise this prints";

var foo = 5;
var result = foo > 5 ? true : false;
console.log(result);
