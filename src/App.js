import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7c2d2acdc8a5c07f1b4556c6d79c46c7`;

  const searchLocation = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearchClick = () => {
    searchLocation();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        {data.main ? 
        <div className="bottom">
          <div className="feels">
            <h1>{data.main.feels_like}</h1>
            <p>feels like</p>
          </div>
          <div className="humidity">
           <h1>{data.main.humidity}</h1>
            <p>humidity</p>

          </div>
          <div className="wind">
            <h1>{data.main.speed} km/h</h1>
            <p>Wind</p>

          </div>
        </div> : null}
        
      </div>
    </div>
  );
}

export default App;