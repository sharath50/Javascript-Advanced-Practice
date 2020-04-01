// functions in javascript

// we can call function before declaration
name();

// using func.call()
function name() {
  console.log("called using call() ");
}

name.call();

(function() {
  // ------------------
  function func(arg1, arg2, ...args) {
    console.log(arguments[0], arguments[1]); // arguments is bult in array
  }
  func("hello", "hi");

  function func2({ number }, { precision = 3 } = {}) {
    console.log(`${number}${precision}`);
  }
  func2({ number: 4 }, { precision: 8 });
})()(
  // call() , apply() , bind()
  function() {
    // ------------
    function func() {
      this.name = "sharath";
      this.getname = function() {
        return this.name;
      };
    }

    let person1 = new func();
    console.log(person1.getname());

    let person = { name: "mohan" };
    // by using call we can change the 'this'
    console.log(person1.getname.call(person));
  }
)();

(function() {
  // ------------
  function func() {
    this.name = "sharath";
    this.getname = function(start, support) {
      return start + " " + support + " " + this.name;
    };
  }

  let person1 = new func();
  console.log(person1.getname("name", "was"));

  let person = { name: "mohan" };
  // by using apply we can change the 'this' and pass additional parameters in array
  console.log(person1.getname.apply(person, ["name", "is"]));
})();

(function() {
  // ------------
  function func() {
    this.name = "sharath";
    this.getname = function(start, support) {
      return start + " " + support + " " + this.name;
    };
  }

  let person1 = new func();
  console.log(person1.getname("name", "was"));

  let person = { name: "mohan" };
  // by using bind we can change the 'this' and pass additional parameters in array
  // and we can assign it to variable
  let result = person1.getname.bind(person, "sharath", "is");
  // we can pass parameters to call in same style without using array
  console.log(result());
})();

// default parameters
(function() {
  // -----------------
  function func1(arg1, arg2 = "default") {
    console.log(arg1, arg2);
  }

  func1("first", "second");
  func1("first");
})();

// functions
(function() {
  // -----------------
  function foo(n) {
    return arguments[0] * arguments[0];
  }
  foo(5);
})();
