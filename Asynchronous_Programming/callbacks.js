// basic callback examples
let name = "sharath";

let func = function(cb) {
  setTimeout(() => {
    console.log(name);
    cb();
  }, 1000);
};

func(func2);

function func2() {
  console.log("hello");
}

// callback pyramid of Doom or callback hell
function func3(cb) {
  setTimeout(() => {
    console.log("3");
    cb();
  }, 3000);
}

function func4(cb) {
  setTimeout(() => {
    console.log("4");
    cb();
  }, 2000);
}

function func5(cb) {
  setTimeout(() => {
    console.log("5");
    cb();
  }, 1000);
}
function func6() {
  setTimeout(() => {
    console.log("6");
  }, 1000);
}

// callback hell
func3(() => {
  func4(() => {
    func5(() => {
      func6();
    });
  });
});
