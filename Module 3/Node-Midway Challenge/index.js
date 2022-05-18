const fetch = require('cross-fetch');

const url = 'https://api.weatherapi.com/v1/current.json?key=64d9320b889c48d8938195727221805&q=Oklahoma City&aqi=no';

fetch(url, {
    method: 'GET',
    headers: {
      'API-KEY': '64d9320b889c48d8938195727221805',  
    },
})
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });
