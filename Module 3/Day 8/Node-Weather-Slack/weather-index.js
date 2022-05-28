const fetch = require('cross-fetch');

// Need to the webhook api from OK Coders Slack for the getWeatherAndSendToSlack function to work

const weatherApiKey = '64d9320b889c48d8938195727221805';
const forecastEndpoint = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=Oklahoma City&days=5`


async function getWeatherData() {
    try {
        const res = await fetch(forecastEndpoint);
        const data = await res.json();
        const message = makeMessageFromWeatherData(data);
        return message;
    } catch (error) {
        console.log(error);
    }
}

async function sendMessageToSlack(message) {
    try {
        const res = await fetch(webhookUrl, {
            method: "Post";
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: message}),
        });
    } catch (e){
        console.log(error)
    }
}

function makeMessageFromWeatherData(data) {
    const city = data.location.name;
    const temp = data.current.temp_f;
    return `In ${city} it is currently ${temp} degrees.`
}

async function getWeatherAndSendToSlack() {
    const message = await getWeatherData();    // You have to add "await" before the function bc it's a Promise 
    sendMessageToSlack(message);
}

getWeatherAndSendToSlack();