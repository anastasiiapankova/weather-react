import React from "react";
import "./App.css";

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
      <div className="weather-contanier">
        <div className="Search">
          <form>
            <div className="row g-3">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your city..."
                  autoComplete="off"
                />
              </div>
              <div className="col-sm-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="search-button"
                >
                  Search
                </button>
              </div>
              <div className="col-sm-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="current-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>

        <div className="row">
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
    </div>
  );
}
