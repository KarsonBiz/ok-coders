const weatherApiKey = '64d9320b889c48d8938195727221805';
const forecastEndpoint = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Oklahoma City&days=5`


window.onload = () => {
    attachGetWeatherDataButtonListener();
  };

  function attachGetWeatherDataButtonListener() {
      const getWeatherDataButton = document.getElementById("get-weather-data");
      if (getWeatherDataButton) {
          getWeatherDataButton.addEventListener("click", getWeatherData);
      }
  }

function addDataToPreTag(data) {
    const resultsPreTag = document.getElementById('data-results');
    resultsPreTag.innerHTML = data.location.name;
}

// to just add the location name:
// function addDataToPreTag(data){
//     const resultsPreTag = document.getElementById('data-results');
//     resultsPreTag
// }


// async / await is a cleaner than promise (fetch) .then
async function getWeatherData() {
    try {
        const res = await fetch(forecastEndpoint);
        const data = await res.json();
        addDataToPreTag(data)
    } catch (error) {
        console.log(error);
    }
}