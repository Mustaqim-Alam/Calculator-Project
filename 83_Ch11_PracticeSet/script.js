// Q.1
// class complex {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }
//   add(num) {
//     this.real = this.real + num.real;
//     this.imaginary = this.imaginary + num.imaginary;
//   }
// }

// let a = new complex(3, 7);
// let b = new complex(5, 6);

// a.add(b);
// console.log(a.real, a.imaginary);

// Q.2
// class human {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class student extends human {
//   walk() {
//     console.log(this.name, ": Student is walking");
//   }
// }

// let harry = new student("Harry");
// harry.walk();
// console.log(harry instanceof human);

//Q.3

class complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }

  get real(){
    return this._real 
  }
  get imaginary (){
    return this._imaginary
  }
  set real(newReal){
    this._real = newReal
  }
  set imaginary(newImaginary){
    this._imaginary = newImaginary }
}

let a = new complex(3, 7);
a.real = 10
let b = new complex(5, 6);
b.imaginary = 10

a.add(b);
console.log(a.real, a.imaginary);
