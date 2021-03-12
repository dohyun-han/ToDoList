const weather = document.getElementById("weather")

const KEY = "515770948d7b078b5bb9e57453f48448",
    COORDS = "coords";

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`)
    .then(response => response.json())
    .then(response =>{
        const temp = response.main.temp;
        const place = response.name;
        const sky = response.weather[0].main;
        weather.innerText=`${place}
        ${sky}
        ${temp}℃`
    });
}

function go(){
    const current = JSON.parse(localStorage.getItem(COORDS));
    getWeather(current.latitude,current.longitude)
}

function success(geo){
    const latitude = geo.coords.latitude;
    const longitude = geo.coords.longitude;
    const geoObj = {
        latitude,
        longitude
    }
    localStorage.setItem(COORDS,JSON.stringify(geoObj));
    getWeather(latitude,longitude);
}

function askCurrentPosition(){
    navigator.geolocation.getCurrentPosition(success);
}

function init(){
    const local = localStorage.getItem(COORDS);
    if(local === null){
        askCurrentPosition();
    }
    else{
        go()
        setInterval(go,60000);
    }
    
}

init();