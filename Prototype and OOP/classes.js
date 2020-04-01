// modern OOP ( class ) in js
let c = new newClass();
console.log(c);
console.log(c.name1);
console.log(c.say());
console.log(newClass.hi());
console.log(newClass.another());

let b = new c.constructor();
console.log(b.name1);
console.log(b.saying());

// no of ways to create a class
class User {
  // ......
}

let Admin = class {
  // ......
};

function makeClass(greet) {
  return class {
    constructor() {
      this.greet = greet;
    }

    greeting() {
      console.log(this.greet);
      return this;
    }
  };
}

User = makeClass("hello");
u = new User().greeting();
u.greeting();

// --------------------------------
class fruitJam {
  myName = "sharath";

  ["say" + "Hi"]() {
    return true;
  }

  sayhello() {
    return false;
  }
}

console.log(fruitJam === fruitJam.prototype.constructor);
console.log(fruitJam.prototype.sayHi());
console.log(Object.getOwnPropertyNames(fruitJam.prototype));

// -----------------------------------------------------
// using class inheritance in javascript
(function() {
  // ----------------
  class Person {
    fname = "sharath";
    lname = "mohan";
    age = 24;

    constructor(fname, lname, age) {
      // instance variables
      this.fname = fname;
      this.lname = lname;
      this.age = age;
    }
  }

  let sharath = new Person("sharath", "mohan", 24);
  console.log(sharath);

  class Students extends Person {
    constructor(fname, lname, age, rollNo) {
      super(fname, lname, age);
      this.rollNo = rollNo;
    }
  }

  let mohan = new Students("mohan", "kumar", 23, 109);
  console.log(mohan);
  console.log(mohan.__proto__);
  console.log(mohan.__proto__.__proto__);
})();

// --------------------------
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

// let tiger = new Animal("tiger");
// tiger.run(50);
// tiger.stop();

class Rabbit extends Animal {
  constructor(name, roaring) {
    super(name);
    this.roaring = roaring;
  }

  roar() {
    console.log(this.name + " roars " + this.roaring);
  }

  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    setTimeout(() => {
      super.stop();
      setTimeout(() => {
        this.hide();
      }, 300);
    }, 1000);
  }
}

rabbit = new Rabbit("rabbit", "krue...");
rabbit.run(30);
rabbit.roar();
rabbit.stop();

// -----------------------------------------------------------------------------------------------------------
// getters and setters in js classes
(function() {
  // ----------------
  class Citizen {
    constructor() {
      this.name = "sharath";
      this.age = 23;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }

    info() {
      console.log(this.name, this.age);
    }
  }

  let person1 = new Citizen("sharath", 24);
  console.log(person1.name);
  person1.name = "mohan";
  console.log(person1.name);
  person1.info();
  // classes have prototypes, [ this, getter, setter ] properties will be there
  Object.defineProperty(Citizen.prototype, "name", { enumerable: true });
  console.log(person1);
})();

// ------------------------------------------------------------------------------------------------
// from javascript.info website
class people {
  name = "sharath"; // class properties
}

let list = new people();
list.name2 = "mohan"; // another class property
console.log(list.name, list.name2);

class listOfItems {
  name = "";
  age = "";

  constructor() {
    listOfItems.loadAnother();
    this.load();
  }

  load() {
    this.veggies = ["carrot", "potato", "ginger", "beans", "bringol"];
  }

  static loadAnother() {
    // while this is a static method this.veggie becomes static propery of class
    this.veggies = [
      "carrot",
      "potato",
      "ginger",
      "beans",
      "bringol",
      "raddish"
    ];
  }
}

let veggies = new listOfItems();
console.log(listOfItems.veggies);
console.log(veggies.veggies);

// -----------------------------------------------------------------------------------------------------------
// creating classes from functions

function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User2 extends f("Hello") {}
new User2().sayHi(); // Hello

// static in classes
(function() {
  // -----------
  class newClass {
    static name = ""; // only accessible by class
    static hi() {
      console.log("say hi!");
    }
  }

  console.log(newClass.hi());
})();

// example usage of static classes
(function() {
  // --------------
  class Person {
    constructor(name) {
      this.name = name;
    }

    static fromPerson(person) {
      return new Person(person.name);
    }
  }

  let person = {
    name: "sharath"
  };

  let person1 = Person.fromPerson(person);
  console.log("===>", person1);
})();
