const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".temperature-description");
const locationElement = document.querySelector(".location");

const weatherApiKey = '64d9320b889c48d8938195727221805';


window.onload = () => {
    attachGetWeatherDataButtonListener();
};

function attachGetWeatherDataButtonListener() {
    const getWeatherDataButton = document.getElementById("submit");
    if (getWeatherDataButton) {
        getWeatherDataButton.addEventListener("click", getWeather);
    }
}


async function getWeather() {
    try {
        const city = document.getElementById("city-input").value;
        const api = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&days=5`;
        const res = await fetch(api);
        const data = await res.json();
        displayWeather(data);
    } catch (error) {
        console.log(error);
    }
}

// Display Weather to UI
function displayWeather(data) {
    console.log(data.current.condition.icon);
    iconElement.innerHTML = `<img src="${data.current.condition.icon}"/>`;
    tempElement.innerHTML = `${data.current.temp_f}° F`;
    descElement.innerHTML = data.current.condition.text;
    locationElement.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
};


