import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7c2d2acdc8a5c07f1b4556c6d79c46c7`;

  const searchLocation = () => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setLocation("")
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <main className="main">
      <section className="search">
        <input
          placeholder="Enter City Name, for example Paris"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search__input"
        />
        <button
         onClick={() => searchLocation("")}
         className="search__btn"
         >Search</button>
      </section>

      <section className="top-and-bottom-container">
        <article className="top">
          <div className="top__info">
            <p>{data.name}</p>
          </div>
          <div className="top__info">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
        </article>

        {data.main ?
          <article className="bottom">
            <div className="bottom__info">
              <p>Feels like:</p>
              <p>{data.main.feels_like.toFixed()}°C</p>
            </div>
            <div className="bottom__info">
              <p>Humidity:</p>
              <p>{data.main.humidity}%</p>
            </div>
            <div className="bottom__info">
              <p>Wind:</p>
              <p>{data.wind.speed.toFixed()} km/h</p>
            </div>
          </article> : null}

      </section>
    </main>
  );
}

export default App;