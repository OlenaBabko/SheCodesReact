import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    temperature: -2,
    city: "Kyiv",
    date: "Thurthday 13:00",
    description: "snowy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/snow_light.png",
    humidity: 32,
    wind: 7
  };

  return (
    <div className="weather-border">
      <div className="row">
        <div className="col-sm-6">
          <h2>
            <img
              src={forecastData.imgUrl}
              alt={forecastData.description}
              ICON
            />
            <span className="temperature">{forecastData.temperature}</span>
            <span className="units">
              <a href="/" CELSIUS_LINK className="active">
                °C
              </a>{" "}
              |
              <a href="/" FAHRENHEIT_LINK>
                °F
              </a>
            </span>
          </h2>
          <h1>{forecastData.city}</h1>
          <h4 CURRENTDayTime>{forecastData.date}</h4>
          <h3>
            <p>
              <span className="description">{forecastData.description}</span>
            </p>
            <p>
              Wind: <span>{forecastData.wind}</span>m/s
            </p>
            <p>
              Humidity: <span>{forecastData.humidity}</span>%
            </p>
          </h3>
        </div>
        <div className="col-sm-6">
          <form className="searchCity" SEARCH_CITY>
            <input
              type="search"
              placeholder="Enter your city"
              SEARCH_CITY_INPUT
            />
            <div className="break"></div>
            <div className="rowButtons">
              <input type="submit" value="Search" className="btn btn-success" />
              <button CURRENT_LOCATION_BUTTON className="currentLocationButton">
                Current
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="forecast" FORECAST></div>
    </div>
  );
}

