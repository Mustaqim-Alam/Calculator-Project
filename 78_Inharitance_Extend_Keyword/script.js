//Creating class object of animals
class Animal {
  //Constructor function for creating Animal data
  constructor(name, color, height) {
    this.name = name;
    this.color = color;
    this.height = height;
  }
  //creating method for animals action
  run() {
    console.log(`${this.name} is runnig color is ${this.color}`);
  }
  shout() {
    console.log(`${this.name} is souting`);
  }
}

// creating class for a particular animal
class horse extends Animal {
  constructor(name, color, height) {
    this.name = name;
    this.color = color;
    this.height = height;
  }
  eatChana(){
    console.log(`${this.name} is eat chana`);
  }
}

let ani = new Animal("monkey", "black", 64);
let herse = new horse("MyHorse", "brown", 8);

ani.shout();
// ani.eatChana();
herse.eatChana();
herse.run();