// Question 1
// const loadscript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     document.head.appendChild(script);
//     script.onload = () =>{
//         resolve(src+ " Done Sucessfully!");
//     }
//   });
// };

// let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");

// a.then((value) =>{
//   console.log(value);
// })

// Question 2
// let main2 = async () => {
//     console.log(new Date());
//     let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
//     console.log(a)
//     console.log(new Date());
// }

// main2();

// Question 3
// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("I'm an error"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try{
//     console.log("Plass wait for await load")
//     let c = await p();
//     console.log(c);

//   }catch(err){
//     console.log("This error has been handled");
//   }
// }
// a();

// Question 4
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 is resolved");
    }, 1000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 is resolved");
    }, 2000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 is resolved");
    }, 3000);
  });
};

let run = async () => {
  console.time("run");
  // let a1 = await p1();
  // let a2 = await p2();
  // let a3 = await p3();

  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let a1a2a3 = await Promise.all([a1,a2,33]); 
  console.log(a1a2a3);


  // console.log(a1)
  // console.log(a2)
  // console.log(a3)

  console.timeEnd("run");
};
run();
