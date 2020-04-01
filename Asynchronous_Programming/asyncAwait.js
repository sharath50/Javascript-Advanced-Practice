// js async await
// async await is a syntactic suger(easy syntax ) to use Promises
(async () => {})();
(async function() {})(); // these are iffies

let name = "sharath";
let func = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};

(async () => {
  let result = await func();
  console.log(result);
  func2();
})();

function func2() {
  console.log("hello");
}

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

// chaining in async await
(async () => {
  let one = await func3();
  let two = await func4();
  let three = await func5();
  console.log(one, two, three);
})();

// error handling in async await
(async () => {
  try {
    let one = await func3();
    let two = await func4();
    let three = await func5();
    console.log(one, two, three);
  } catch (err) {
    console.log(err);
  }
})();
