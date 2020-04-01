// // parallel requests

let name = async () => {
  let data = await (() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("sharath");
      }, 1200);
    });
  })();
  console.log(data);
};

let age = async () => {
  let data = await (() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(24);
      }, 800);
    });
  })();
  console.log(data);
};

let concurent = async function() {
  await Promise.all([name(), age()]);
};

concurent();
