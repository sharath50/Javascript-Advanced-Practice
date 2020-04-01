// constructor pattern
(function() {
  // ---------------
  function Person(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function() {
      return this.param1 + " " + this.param2;
    };
  }

  let p = new Person();
  /*
   * 'new' keyword creates constructor function ( new object ) for function
   * and it links every new object to function object prototypes
   * binds 'this' to new object scope
   * returns new
   */
})();

// Prototype pattern
(function() {
  // ---------------
  function Person(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
  Person.prototype.toString = function() {
    this.some = "some";
    return this.param1 + " " + this.param2;
  };

  let p = new Person("a", "b");
  /*
   * An encapsulation of properties that an object links to
   * two functions [ toString, Person ] are pointed to same prototype
   * the prototype is the one which is created for Person before
   * totally toString method lives in prototype
   */
})();

// constructor pattern usage in node.js applications
(function() {
  // from main file
  function Main() {
    this.name = "name here";
  }

  // module.exports = Main

  // in sub file
  // let Main = require("./main")
  let m = new Main();
})();

// classes patterns
(function() {
  "use strict";
  // -------------------
  class newClass {
    name1 = "sharath"; // class property can be accessible by instances of this class
    static name2 = "mohan"; // static propery of class only accessible by class

    constructor() {
      // constructor of the class, this method still accessible for instance
      this.name3 = "kiran"; // instance property of this class
    }

    say() {
      // instance method of this class only accessible by instances
      return this.name1 + " says!";
    }

    saying() {
      var name = "empty"; // property of saying() method, only accessible inside method
      return name;
    }

    static hi() {
      // static method of this class only accessible by class newClass
      return "hi from static";
    }

    static another() {
      return newClass.name2; // static properties can be accessible by static methods of the class
    }
  }
})();

// module patterns
(function() {
  // --------------------
  var Module = function() {
    var priveteVar = "I am private...";
    return {
      method: function() {
        return "first";
      },
      nextMethod: function() {
        return "second";
      }
    };
  };

  let v = new Module();
  let v1 = Module();
  console.log(v.method());
  console.log(v1.method());
})();
/**
 * export class name() {}
 * export default class naming() {}
 *
 */
