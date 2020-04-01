/*
export keywork
named exports 
default exports
aggregating Modules
*/

export default class person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("hi, " + this.name);
  }
}

export function func1() {}
export default function func2() {}
export { func3 as default, age };
export { func4 } from "./module1";
