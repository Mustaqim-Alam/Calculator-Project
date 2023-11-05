// alert("Hello I'm Alam!!")

// let a = setTimeout(function ()  {
//    alert("I'm Inside setInterval") ;
// }, 3000);

// let b = prompt("Do you want to see timer");
// if (b == "n") {
//     clearTimeout(a) 
// }

const sum = (a,b,c) =>  {
 console.log("Yes i'm running " + (a+b+c))
 a+b
};

setTimeout(sum , 2000 , 3,6,5)