try{
    let age = prompt("Enter your age")
    age = parseInt(age);
    if (age > 150){
        throw new Error("This is Probaby not true!!")
        // throw new SyntaxError("This is Probaby not true!!")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}