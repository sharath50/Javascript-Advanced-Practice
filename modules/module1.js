export default class people {
  constructor(name) {
    this.name = name;
  }

  info() {
    return this.name + " " + this.age;
  }
}

export function func4() {
  return "func4";
}
