const weatherApiKey = '64d9320b889c48d8938195727221805';
const forecastEndpoint = 'http://api.weatherapi.com/v1/forecast.json?key=64d9320b889c48d8938195727221805&q=Oklahoma City&days=5'

const getWeatherDataButton = document.getElementById('get-weather-data');
getWeatherDataButton.addEventListener('click', () =>
    fetch(forecastEndpoint)
        .then((response) => response.json())
        .then((data) => addDataToPreTag(data))
        .catch((error) =>
            console.log('Error in fetch for forecast.json: ', error.message)
        )
);

function addDataToPreTag(data) {
    const resultsPreTag = document.getElementById('data-results');
    resultsPreTag.innerHTML = JSON.stringify(data, null, 2);
}

// on click -> API call (Get weather api data) -> put it in a pre tag
// usually need 2 things for an API call - URL + Authenticate

// anatomy of a URL:
// base url (http + subdomain + domain + [api])