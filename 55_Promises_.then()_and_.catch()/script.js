let p1 = new Promise ((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("Hello i'm promise fullfilled in 5 seconds")
        resolve(true)
    },5000);
});
let p2 = new Promise ((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("Hello i'm promise rejected in 5 seconds")
        reject(new Error("I'm in an error"))
    },5000);
});

// console.log(p1,p2);


//To get the value of the promise
p1.then((value) => {
    console.log(value);
})


//To catch the error of the promise
// p2.catch((error) =>[
//     console.log("some error occured in p2")
// ])

p2.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})












//#Examples
// let p3 = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("Hello i'm promise 3 fullfilled in 2 seconds")
//         resolve(true)
//     },2000);
// });

// p3.then(alert);  