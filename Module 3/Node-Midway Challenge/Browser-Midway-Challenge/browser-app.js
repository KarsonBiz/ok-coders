const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});

const weatherApiKey = '64d9320b889c48d8938195727221805';
inputVal = input.value;
const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${inputVal}`;


window.onload = () => {
    attachGetWeatherDataButtonListener();
};

function attachGetWeatherDataButtonListener() {
    const getWeatherDataButton = document.getElementById("submit");
    if (getWeatherDataButton) {
        getWeatherDataButton.addEventListener("click", getWeatherData);
    }
}

async function getWeatherData() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        addDataToPreTag(data)
    } catch (error) {
        msg.textContent = "Please search for a valid city";
    }
}

function addDataToPreTag(data) {
    const resultsPreTag = document.getElementById('data-results');
    resultsPreTag.innerHTML = data.location.name;
}

const { main, city, sys, weather } = data;
const icon = `https://www.weatherapi.com/docs/weather_conditions.json`;

const li = document.createElement("li");
li.classList.add("city");
const markup = `
  <h2 class="city-name" data-name="${city},${sys.country}">
    <span>${city}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;
li.innerHTML = markup;
list.appendChild(li);