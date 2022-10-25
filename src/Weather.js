import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    date: "Friday: 21:30",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: "Humidity: 50%",
    wind: "30 km/h",
    temperature: "19",
  };

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
        <li>{weatherData.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <strong>{weatherData.temperature}</strong>
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
            <li>{weatherData.humidity}</li>
            <li>{weatherData.wind}</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
