// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("I'm done after 2 second ")
//         resolve(56)
//     }, 2000);
// })



// p1.then((value) => {
//     console.log(value)
//     let p2 = new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Promise2")
//             }, 2000);
//     })
//     return p2
// }).then((value) => {
//     console.log("We are done")
//     return 2
// }).then((value) => {
//     console.log("Now we Finallly Done")
// })



const loadscript = (src) => {
    return new Promise ((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () =>{ resolve("Script has been loaded sir") }
        script.onerror = () =>{ reject(0) }
    })

}

let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");

p1.then((value) => {
    console.log(value)
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
}).then((value) => {
    console.log("Second is ready Sir")
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
}).then((value) =>{
    console.log("Third is ready Sir")
}).catch((error) =>{
    console.log("We are sorry but we having error to loading this script")
})