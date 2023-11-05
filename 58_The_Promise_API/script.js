let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Value 1');
    }, 11000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Value 2');
        reject(new Error("Error"));
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Value 3');
    }, 3000);
})


// let all_Promises = Promise.all([p1, p2, p3]);
// let all_Promises = Promise.allSettled([p1, p2, p3]);
// let all_Promises = Promise.race([p1, p2, p3]);
// let all_Promises = Promise.any([p1, p2, p3]);
// let all_Promises = Promise.resolve(2);
// let all_Promises = Promise.reject(new Error("Hey Error"));


all_Promises.then((value) => {
    console.log(value)
})






// p1.then((value) => {
//     console.log(value);
// })

// p2.then((value) => {
//     console.log(value);
// })

// p3.then((value) => {
//     console.log(value);
// })