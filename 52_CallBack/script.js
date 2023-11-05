//#Synchronas Programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// let d =console.log(a +" is "+ b +" year old and has " + c + " favorite color ");



//#Asynchronas Programming
// console.log("Start")
// setTimeout(() => {
//     console.log("Hey Asynchronas Programming");
// }, 3000);
// console.log("End");



//   #Callbacks
function loadscript (src , callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null , src);
    }
    script.onerror = function (){
        console.log("Error loading script with SRC: " + src);
        callback( new Error("SRC got some new error"));
    }
    document.body.appendChild(script);
}

function hello ( error) {
    if(error){
        console.log(error);
        return;
    }
    alert("Hello world!" );
}
function goodmorning(){
    alert("Good Morning!");
}




loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" ,hello  );