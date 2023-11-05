async function weather(){
    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("32 deg")
        }, 2000)
    })
    let PuneWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("23 deg")
        }, 5000)
    })

    // DelhiWeather.then((alert))
    // PuneWeather.then((alert))

    console.log("Fetching Delhi weather Please wait...")
    let Delhiw = await DelhiWeather
    console.log("Delhi weather Fetched successfully: " + Delhiw)
    console.log("Fetching Pune weather Please wait...")
    let Punew = await PuneWeather
    console.log("Pune weather Fetched successfully: " + Punew)
    return [Delhiw, Punew]

}

// weather().then()

const weather1 = ()=>{
    // console.log("I'm Weather 1 and i'm not waiting")
    console.log("I'm Weather1 and i'm  waiting")
}

const allweather = async ()=>{
    let a = await weather();
    let b = await weather1();
}

allweather();


// async function Alam() {
//     return 1
// }

// Alam().then((x)=>{
//     alert(x)
// })