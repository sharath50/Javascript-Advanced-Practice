// different way to create objects
(function() {
  // --------------------

  var person = {
    name: "sharath"
  };
  person.age = 24;
  person["place"] = "belur";

  var person2 = {
    hobby: "reading"
  };

  console.log(person.name);
  console.log(person["age"]);

  console.log(person.hasOwnProperty("name")); // true
  console.log(Object.getOwnPropertyDescriptor(person, "name")); // gives property descriptor object
  console.log(Object.getOwnPropertyNames(person), Object.keys(person)); // array of properties
  console.log(Object.values(person)); // array of values
  console.log(Object.assign({}, person, person2)); // merges no of object at right and inserts inside left most object
  Object.defineProperty(person, "name", {
    value: "new name",
    enumerable: true, // if false, it won't taken for consideration can't see it
    configurable: false, // if false, can't configure the property
    writable: true // if false, can't rewrite the property
  }); // these are the default values for property descriptors
  // Object.defineProperty(person, "name", {
  //   enumerable: false // configurable is alredy false we can't change property config anymore
  // });
  // Object.defineProperties(); // to define multiple properties
  // Object.freeze(person); // we can't edit or change the entire person
  person.name = "lll"; // now we cannot create grade property on person
  console.log(person);
})();

// creating object with dinamic property
(function() {
  //------------
  name = "sharath";
  let obj = {
    p1: 10,
    p2: 20,
    name,
    func: function() {},
    func1() {},
    func2: () => {},
    [name]: 24 // this can be dinamic like this
  };
  console.log(obj.name); // undefined
  console.log(obj);
})();
// object destructuring in js
// destructuring objects
(function() {
  // ------------------
  var info = {
    id: 450,
    car: "bmw",
    price: 4900000
  };

  var id, car;
  ({ id, car, price } = info);
  console.log(id, car, price);

  var { id, car, price } = info;

  console.log(id, car, price);

  var { id: identify, car: item, price: cost } = info;
  console.log(identify, item, cost);
})();

// Objects literals in javascript
("use strict");
(function() {
  let person = {
    fname: "sharath",
    lname: "mohan",
    isYoung() {
      return person.age <= 40; // shorthand
    }
  };
  person.age = 24;
  person.isAdult = function() {
    return person.age >= 18;
  };

  console.log(person.isAdult());
})();

//
(function() {
  // --------------
  let name = "sharath";
  var task = {
    name,
    getName() {
      return this.name;
    }
  };
  console.log(task.getName());
  console.log(task.getName.call({ name: "mohan" }));
})();

//
(function() {
  function regUser(fname, lname) {
    let person = {
      fname,
      lname // shorthand
    };
    console.log(person);
  }

  regUser("sharath", "mohan");
})();

(function() {
  let person = {
    fname: "sharath",
    lname: "mohan"
  };

  console.log(Object.keys(person));
  console.log(Object.values(person));

  for (let key in person) {
    console.log(key);
  }
})();

(function() {
  /*
  equality check in js
    "1" == 1
    true === true
    Object.is(true, true);

    0 == false
    null == undefined
    "" == 0
    [1,2] == "1, 2"

    NaN === NaN // false
    +0 === -0 // true

    Object.is(NaN, NaN) // true
    Object.is(+0, -0) // false

    objects are always not equal in js
    because js compares objects with theirs memory address
    memory addresses of two variables are always different
    until and unless we refer the same obj ot another name
    {} == {} // false
    {} === {} // false
    Object.is({}, {}) // false
  */
  let obj11 = { p: "v" };
  let obj22 = { p: "v" };
  console.log(obj11 == obj22, obj11 === obj22, Object.is(obj11, obj22));

  let obj1 = { p: "v" };
  let obj2 = obj1;
  console.log(obj1 == obj2, obj1 === obj2, Object.is(obj1, obj2));
  // ---------------
})();

// merging the objects one into another
(function() {
  let person1 = {
    fname: "sharath",
    lname: "mohan"
  };

  let person2 = {
    age: 24
  };

  let merged2 = Object.assign(person1, person2); // modifies the main object
  console.log(merged2);
  console.log(person1);
  console.log(person2);

  let merged1 = Object.assign({}, person1, person2); // returns new another object
  console.log(merged1);
  console.log(person1);
  console.log(person2);

  // --------------------
})();

// constructor functions
(function() {
  function Person(fname, lname, age) {
    (this.fname = fname),
      (this.lname = lname),
      (this.age = age),
      (this.isAdult = function() {
        return person.age >= 18; // shorthand
      });
  }

  let anil = new Person("anil", "pandya", 24);
  let rishi = new Person("rishi", "kumar", 23);
})();

// property descriptor
(function() {
  let person = {
    fname: "sharath"
  };

  console.log(Object.getOwnPropertyDescriptor(person, "fname"));
  console.log(Object.getOwnPropertyNames(person));

  Object.defineProperty(person, "fname", { writable: false });
  // person.fname = "mohan"; // cannot be changed

  let person2 = {
    name: {
      fname: "sharath"
    },
    place: "belur",
    grad: true
  };

  Object.defineProperty(person2, "name", { writable: false });
  person2.name.fname = "mohan"; // still inside name fname can be changed

  Object.freeze(person2.name);
  // person2.name.fname = "sharath"; // cannot be changed
  console.log(person2);

  Object.defineProperty(person2, "name", { enumerable: false });

  // if we set enumerable to false
  // we cannot perform any actions on that properties
  console.log(JSON.stringify(person2));

  Object.defineProperty(person2, "place", { configurable: false });
  // if configurable is false
  // property cannot be configurable like define property
  // and cannot delete the property
  // delete person2.place;
  console.log(person2);
})();

// defining getters and setter for objects
(function() {
  let person = {
    name: {
      fname: "sharath",
      lname: "mohan"
    },
    age: 24
  };

  Object.defineProperty(person, "fullname", {
    get: function() {
      return this.name.fname + " " + this.name.lname;
    },
    set: function(value) {
      let fullname = value.split(" ");
      this.name.fname = fullname[0];
      this.name.lname = fullname[1];
    }
  });

  console.log(person.fullname);
  person.fullname = "rudresh karthik";
  console.log(person);
  // ----------------------------
})();

// object destructuring in js

var details = { name: "sharath", age: "24" };
var { name, age } = details;
console.log(name, age);

var names = { name1: "sharath", name2: "mohan" };
var { name1: fname, name2: lname } = names;
console.log(fname, lname);

obj = { names: { fname: "sharath" } };
var {
  names: { fname }
} = obj;
console.log(fname);
