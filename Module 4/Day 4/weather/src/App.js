import './App.css';
import { useState } from "react"

function App() {
  const apiKey = "4938661388c0438c839160048222506";
  const [days, setDays] = useState(5);
  const [query, setQuery] = useState("73106")
  const [weatherData, setWeatherData] = useState({})
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}&aqi=no&alerts=no`;

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h3>Weather</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label>Location Query: </label>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div>
            <label>Days to Forecast: </label>
            <input type="number" value={days} onChange={(e) => setDays(e.target.value)} />
          </div>
          <button type='submit'>Search!</button>
        </form>
        {weatherData.location && (
          <div>
            <h3>City</h3>
            <p>{weatherData.location.name}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

// API KEY: 4938661388c0438c839160048222506