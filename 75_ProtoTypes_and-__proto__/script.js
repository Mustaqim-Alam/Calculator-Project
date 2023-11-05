let a = {
  name: "Mustaqim",
  language: "English",
  run: () => {
    alert("Self run");
  },
};
console.log(a);

let p = {
  //   run: () => {
  //     alert("Run");
  //   }
  Age: 34,
};

p.__proto__ = {
  name2: "Zaid",
};

p.__proto__.__proto__ = {
  name3: "Anas",
};

p.__proto__.__proto__.__proto__ = {
  name4: "Shaquib",
};

a.__proto__ = p;
console.log(a);
// a.run();
console.log("This is name2: " + a.name2);
console.log("This is name3: " + a.name3);
console.log("This is name4: " + a.name4 + " " + "Imam ");
