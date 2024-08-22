class Car {
  alerBrand() {
    console.log("hey");
  }
}
class Ford extends Car {
  constructor() {
    super();
    this.windows = 4;
  }
}
const ford = new Ford();
console.log(ford.windows);
