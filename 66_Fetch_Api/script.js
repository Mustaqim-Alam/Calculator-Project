let p = fetch("https://gWeather.herokuapp.com/weather/ny")
p.then((Response) =>{
    console.log(Response.headers)
    console.log(Response.status)
    console.log(Response.ok)
    return Response.json()
}).then((value) =>{
    console.log(value);
}).catch((err) =>{
    console.log(err);
})