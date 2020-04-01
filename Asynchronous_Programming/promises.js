// promises
// js promises are not lazy
/*
  pending
  fullfilled
  rejected
*/

/*
Promise
.then()
.catch()
.finally()

Promise.all([])
Promise.allSettled([])
Promise.race([])
Promise.resolve()
Promise.reject()
*/

let name = "sharath";
let func = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};

function func2() {
  console.log("hello");
}

func().then(result => {
  console.log(result);
  func2();
});

// there is no pyramid of doom here
function func3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3");
    }, 3000);
  });
}

function func4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4");
    }, 2000);
  });
}

function func5() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("5");
    }, 1000);
  });
}

// we can chain the promises here
func3()
  .then(res => {
    console.log(res);
    return func4();
  })
  .then(res => {
    console.log(res);
    return func5();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

// OR

var funcThree = func3();
var funcFour = func4();
var funcFive = func5();
// this is also fine  [func3(), func4(), func5()]
Promise.all([funcThree, funcFour, funcFive])
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// ==================
let call = function(arg) {
  return new Promise((resolve, reject) => {
    if (arg) {
      resolve("success");
    } else {
      reject("fail");
    }
  });
};

call(true)
  .then(data => data) // this automatically returns the data to next .then block
  .then(console.log) // evety .then function passes the argument to first function,
  // here console.log, console.error takes the arg passed by .then
  .catch(console.error);

// resolve and reject in promises
function func6(ack) {
  return new Promise((resolve, reject) => {
    if (ack) {
      resolve({ name: "sharath", place: "belur" });
    } else {
      reject(false);
    }
  });
}

func6(true)
  .then(data => {
    console.log(data.name);
    console.log(data.place);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("this runs finally");
  });

// we can create promisify functions like this
// if we want to pass multiple arguments then we can create function and return promise
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("timeout!");
    resolve(100000);
  }, 2000);
});
p.then(state => {
  console.log(state);
}).catch(err => {
  console.log(err);
});

// Promise methods
let a = Promise.resolve("from a");
a.then(res => {
  console.log(res);
})
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("a completed");
  });

let b = Promise.reject("unfartunate error accured");
b.then(res => {
  console.log(res);
})
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("b completed");
  });

// all settled
// if any promise rejects, still gets the as much data that is ready
var funcOne = () => {
  return Promise.resolve("ok");
};
var funcTwo = () => {
  return Promise.reject("err");
};

Promise.allSettled([funcOne(), funcTwo()])
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// racing in Promises
// when we have multiple endpoints and one is faster than other
// we can use race to get the first promise
// race will stops whenever it's first promise resolved
// if first promise gives error it directly calls to catch block
// Promise.all is opposite to race it needs all promises resolved
let racing = function() {
  let get1 = get("url");
  let get2 = get("url");
  Promise.race([get1, get2]).then(data => {
    console.log(data);
  });
};
