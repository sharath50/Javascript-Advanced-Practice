/**
 * comparison in js
 */
// this is equal comparison  ==
// this is for strict equal comparison  ===
true == true; // gives true
"true" == true; // gives true
"true" === true; // gives false
"1" === 1; // gives false
"0" != 0; // gives false they are equal because this is not strict comparison and js converts "0" to 0
true !== "true"; // gives true

// more precise than ===
Object.is(NaN, NaN); // true
Object.is(+0, -0); // false
