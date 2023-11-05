console.log("Hello im first")

setTimeout(function() {
    console.log("Hello  im load after two  second")
}, 2000) 

console.log("Hello im third") 

let promise =  new Promise(function(resolve , reject) {
    alert("Hello im")
    reject(89)
})

console.log(promise)
