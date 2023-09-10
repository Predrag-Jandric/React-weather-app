import React, { useState } from "react";
import axios from "axios";

function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=belgrade&units=imperial&appid=7c2d2acdc8a5c07f1b4556c6d79c46c7`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Belgrade</p>
          </div>
          <div className="temp">
            <h1>60 F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p>65 F</p>
            <p>feels like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>humidity</p>

          </div>
          <div className="wind">
            <p>14 MPH</p>
            <p>wind</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
