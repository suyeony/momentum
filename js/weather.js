const API_KEY = "69c507e0506449860f549fde4514f6f8";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const icon = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#location span");
        const name = data.name;
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"></img>`;
        temp.innerText = `${data.main.temp}` + "°";
        city.innerText = data.name;
        //weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      
        console.log(data);
    });
}

function onGeoError(error) {
    alert(error.message);
    console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);