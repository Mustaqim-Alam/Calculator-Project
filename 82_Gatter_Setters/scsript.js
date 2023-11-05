class Animal {
  constructor(name) {
    this._name = name;
  }
  fly() {
    console.log("I'm flying");
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

class goat extends Animal {
  eat() {
    console.log("Goat is eating grass!!");
  }
}

let a = new Animal("Gokul");
a.fly();
let b = new goat("Goat");
b.eat();
console.log(a.name);
a.name = "Bruno";

console.log(a.name);
let c = 387;

//Instance operator
console.log(a instanceof Animal);
console.log(c instanceof Animal);
console.log(b instanceof Animal);


