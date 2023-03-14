import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tallinn",
    temperature: 12,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="wrapper">
      <div className="Weather">
        <div className="title">
          <h1>Exact weather</h1>
        </div>
        <div className="maincity">
          <h3 id="city"> {weatherData.city}</h3>
        </div>
        <div className="line"></div>
        <div>
          <div className="row5">
            <div className="col-1">
              <ul>
                <li id="date"> {weatherData.date} </li>
                <li className="clearicon">
                  {" "}
                  {weatherData.description}
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    id="icon"
                    className="picture"
                    width="70"
                  />
                </li>
                <li>
                  <span id="temperature"></span> {weatherData.temperature}°C{" "}
                </li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li id="description"></li>
                <li>
                  {" "}
                  humidity: <span id="humidity"></span> {weatherData.humidity} %
                </li>
                <li>
                  {" "}
                  wind: <span id="wind"></span> {weatherData.wind} km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="line"></div>
          <div className="row2">
            <div className="weather-forecast" id="forecast"></div>
            <div className="line"></div>
          </div>
          <div className="row3">
            <form
              className
              action=""
              method="get"
              name="search-form"
              id="search-form"
            />
            <input
              className="string"
              type="search"
              placeholder="Looking for the weather anywhere"
              autocomplete="off"
              autofocus="on"
              id="city-input"
            />
            <input type="submit" value="Find" className="button" id="city" />
            <button type="reset">Clear</button>
          </div>
          <div className="popular">
            <p> London Madrid New-York Paris Rome </p> 
            <p className = "path"> Coded by Valentyna Matsiievska <a href = "https://github.com/ValentynaMatsiievska/Future-project">and is open-sourced on GitHub </a>
             and  <a href = "https://app.netlify.com/sites/exactweather/overview">hosted on Netlify</a></p> 
            </div> 
        </div>
      </div>
    </div>
  );
}
