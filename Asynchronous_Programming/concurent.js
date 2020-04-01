// concurent requests

let concurent = async function() {
  let name = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("sharath");
      }, 1200);
    });
  };

  let age = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(24);
      }, 800);
    });
  };

  console.log(await name(), await age());
};

concurent();
