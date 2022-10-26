import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Friday 22:00",
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row g-3">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Type your city..."
                autoFocus="on"
              />
            </div>
            <div className="col-sm-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
                id="search-button"
              />
            </div>
            <div className="col-sm-2">
              <input
                type="button"
                value="Current"
                className="btn btn-primary"
                id="current-button"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img src={weatherData.icon} alt={weatherData.description} />
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/" className="active" rel="noreferrer">
                  °C
                </a>
                |
                <a href="/" rel="noreferrer">
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    );
  } else {
    const apiKey = "ea7a32dcc831c35383c1a06131a862ac";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
