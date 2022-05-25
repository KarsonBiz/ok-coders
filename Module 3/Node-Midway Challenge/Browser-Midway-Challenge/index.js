const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature.description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weatherApiKey = '64d9320b889c48d8938195727221805';
const forecastEndpoint = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${inputVal}`

// App Data
const weather = {};
weather.temperature = {
    unit: "celsius"
}

const kelvin = 273;

// Check If Browser Supports Geolocation
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

// See User's Position
function setPosition(position) {
    let latitude = position.location.latitude;
    let longitude = position.location.longitude;

    getWeather(latitude, longitude);
}

// Show Error When There Is An Issue With Geolocation Service
function showError(error) {
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`
}

// Get Weather From API Provider
function getWeather(latitude, longitude) {
    let api = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${latitude},${longitude}&days=5`;

    fetch(api)
    then(function (response) {
        let data = response.json();
        return data;
    });
    then(function (data) {
        weather.temperature.value = Math.floor(data.main.temp - kelvin);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].com;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    then(function () {
        displayWeather();
    })

}// Display Weather to UI
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// const getWeatherDataButton = document.getElementById('get-weather-data');
// getWeatherDataButton.addEventListener('click', () =>
//     fetch(forecastEndpoint)
//         .then((response) => response.json())
//         .then((data) => addDataToPreTag(data))
//         .catch((error) =>
//             console.log('Error in fetch for forecast.json: ', error.message)
//         )
// );

// function addDataToPreTag(data) {
//     const resultsPreTag = document.getElementById('data-results');
//     resultsPreTag.innerHTML = JSON.stringify(data, null, 2);
// }
