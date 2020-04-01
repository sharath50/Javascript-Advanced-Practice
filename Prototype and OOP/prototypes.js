// different ways of object operations
(function() {
  // -----------------
  var person = function() {
    this.name = "sharath";
    this.info = function(str) {
      return str + " is " + this.name;
    };
  };
  Object.create(person.prototype);

  let newPerson = new person();

  let name = newPerson.info("name");
  let name2 = newPerson.info.call({ name: "mohan" }, "name");
  let name3 = newPerson.info.apply({ name: "kiran" }, ["name"]);
  let name4 = newPerson.info.bind({ name: "rithwik" }, "name");

  console.log(name);
  console.log(name2);
  console.log(name3);
  console.log(name4());
})();

// prototype in objects
(function() {
  function Person(fname, lname) {
    this.fname = fname;
    this.lanme = lname;
  }

  console.log(Person.prototype); // this is prototype of Person function
  Person.prototype.age = 24; // this will reflect in objects of this function

  let anil = new Person("anil", "pandya");
  let sharath = new Person("sharath", "mohan");

  // since instance(anil, sharath) prototype is same as function prototype
  console.log(Person.prototype === anil.__proto__); // true -- means they are exactly same shares same memory

  console.log(anil.__proto__);
  console.log(sharath.__proto__);

  anil.__proto__.age = 19; // this again changes function's prototype age properties
  // since anil, sharath, and function shares same prototype
  // age property changes for all

  console.log(anil.__proto__);
  console.log(sharath.__proto__);

  anil.age = 21; // this only changes anil's age rptorerty
  // because we are not changing the prototype property

  console.log(anil.age, anil.__proto__);
  // js always first looks for property in object if there is not
  // then it looks at prototype of object (__proto__) therefore anil.age && anil.__proto__.age are different
  console.log(sharath.age, sharath.__proto__);

  Person.prototype = { age: 18 };
  let cris = new Person("cris", "brat");
  // here Person function creates new prototype object that live sin other memory
  // here cris uses this new prototype still anil and sharath uses old prototype
  console.log(cris.age); // 18
  console.log(sharath.age); // 19
  console.log(anil.age); // 21
})();

//
(function() {
  function Students(name, age) {
    this.name = name;
    this.age = age;
  }
  Students.prototype.constructor = Students;

  Students.prototype.info = function() {
    console.log(this.name);
    console.log(this.age);
  };

  let stu1 = new Students("sharath", 24);
  stu1.info();
  console.log(Students.prototype);
})();

// js prototypes and inheritance
(function() {
  // ------------
  let myFunc = function() {};
  console.log(myFunc.prototype);

  let person = {
    name: "sharath"
  };
  console.log(person.prototype);
  console.log((person.__proto__.name = "hello"));
  console.log(person.__proto__);
  console.log(person.__proto__.name);
  console.log(person.name);
})();

// prototype inheritance in js
(function() {
  // ------------
  let myFunc = {
    name: "sharath",
    toString() {
      return this.name;
    }
  };
  Object.defineProperty(myFunc, "toString", {
    writable: false
  });

  let newFunc = Object.create(myFunc.__proto__);
  newFunc.name = "some";
  newFunc.toString = "something else";
  console.log(myFunc, newFunc);

  console.log(myFunc.prototype === newFunc.prototype);
})();

// prototype inheritance
(function() {
  // --------------
  let Person = function(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    // don't create this type of methods
    this.info = function() {
      // if we have hundreds of objects for Person functions
      // info will be creted hundred times therefore
      // we have to prototype like bellow Person.prototype.print
      console.log(this.fname, this.lname, this.age);
    };
  };
  Person.prototype.constructor = Person;
  Person.prototype.print = function() {
    console.log("printing hello");
  };

  let Students = function(fname, lname, age, rollNo) {
    Person.call(this, fname, lname, age); // calling parent constructor functions
    Person.prototype.print(); // calling parent prototype functions
    this.rollNo = rollNo;

    this.register = function() {
      console.log(this.fname + " is registered with " + this.rollNo);
    };
  };
  Students.prototype = Object.create(Person.prototype);
  // bellow has to done after assisn person prototype as students prototype
  Students.prototype.constructor = Students; // assign students as constructor of students function

  let sharath = new Students("sharath", "mohan", 24, 109);
  console.log(sharath); // student instance
  console.log(sharath.__proto__); // prototype of student
  console.log(sharath.__proto__.__proto__); // prototype of student prototype
  sharath.register();
  sharath.print();
  sharath.info();
  let mohan = new Person("mohan", "kumar", 23);
  let fromConstructor = new mohan.constructor("anil", "kumar", 24);
  fromConstructor.info();
  fromConstructor.print(); // this is actually coming from __proto__
})();

// getter and setters in prototypes is same as objects getters and setters
(function() {
  // ----------------
  let Person = function(fname, lname) {
    this.fname = fname;
    this.lname = lname;

    Object.defineProperty(this, "fullname", {
      get: function() {
        return this.fname + " " + this.lname;
      },
      set: function(value) {
        let parts = value.split(" ");
        this.fname = parts[0];
        this.lname = parts[1];
      }
    });
  };

  let sharath = new Person("sharath", "mohan");
  console.log(sharath.fullname);
  sharath.fullname = "karthik rudresh";
  console.log(sharath.fullname);
  console.log(sharath.fname);
  console.log(sharath.lname);
})();

// we can add methods to default object in js
(function() {
  // -----------------
  String.prototype.sayHello = function() {
    return "hello " + this.toString();
  };

  console.log("sharath".sayHello());
})();
