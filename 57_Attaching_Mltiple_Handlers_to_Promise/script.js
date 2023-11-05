let p1 = new Promise((resolve, reject) =>{
    console.log("This promise is not resolved")
    setTimeout(() => {
        resolve(1)
    }, 2000)
})

p1.then( ()=>{
    alert("This promise is now resolved")  
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(4)
        }, 6000)
    }).then((value)=> { console.log(value)})  
})

p1.then(()=>{
    console.log("Hurray")
})

p1.then(() => {
    console.log("Congratulaton!! Now this promise is resolved")
})