const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature.description p");
const locationElement = document.querySelector(".location p");
// const notificationElement = document.querySelector(".notification");

const weatherApiKey = '64d9320b889c48d8938195727221805';
const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${setLocation}`;


function setLocation(data) {
    let city = data.location.name;

    getWeather(city);
}

console.log(setLocation);

// App Data
// const weather = {};
// weather.temperature = {
//     unit: "celsius"
// }

// const kelvin = 273;


window.onload = () => {
    attachGetWeatherDataButtonListener();
};

function attachGetWeatherDataButtonListener() {
    const getWeatherDataButton = document.getElementById("submit");
    if (getWeatherDataButton) {
        getWeatherDataButton.addEventListener("click", getWeather);
    }
}


// async function getWeatherData() {
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         addDataToApp(data)
//     } catch (error) {
//         console.log(error);
//     }
// }


// Get Weather From API Provider
function getWeather(city) {
    let api = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${setLocation}&days=5`;

    fetch(api)
    then(function (response) {
        let data = response.json();
        return data;
    });
    then(function (data) {
        weather.temperature.value = Math.floor(data.current.temp_f);
        weather.description = data.current.condition.text;
        weather.iconId = data.current.condition.icon;
        weather.city = data.location.name;
        weather.region = data.location.region;
        weather.country = data.location.country;
    })
    then(function () {
        displayWeather();
    })

    // Display Weather to UI
    function displayWeather() {
        iconElement.innerHTML = `<img src="icons/${data.current.condition.icon}.png/>`;
        tempElement.innerHTML = `${data.current.temp_f}°<span>F</span>`;
        descElement.innerHTML = data.current.condition.text;
        locationElement.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    }
};


