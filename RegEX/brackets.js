/*
    *** brackets

    [abc]	Find any character between the brackets
    [^abc]	Find any character NOT between the brackets
    [0-9]	Find any character between the brackets (any digit)
    [^0-9]	Find any character NOT between the brackets (any non-digit)
    (x|y)	Find any of the alternatives specified, x or y
*/

/*
    to matching and recongnize the information
*/

var name = "sharath mohan";

// 'sha' replaces with 'a'
console.log(name.replace(/[sha]/gi, "a"));

// everything replaces by 'a' except 'sha'
console.log(name.replace(/[^sha]/gi, "a"));

// chars from 'a' to 'h' replaces by 'a'
console.log(name.replace(/[a-h]/gi, "a"));

// everything replaces by 'a' except chars from 'a' to 'h'
console.log(name.replace(/[^a-h]/gi, "a"));

// 's' and 'h' replaces with 'a'
console.log(name.replace(/[s|h]/gi, "a"));
