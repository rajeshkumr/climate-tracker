import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import weather from "../../model/weather";

function Main() {
  const [weatherState, setWeather] = useState("...loading");
  useEffect(() => {
    async function getWeather() {
      try {
        const data = await weather();
        console.log("Weather data", data);
        setWeather(data.coords);
      } catch (err) {
        console.error("Weather error", err);
        alert(err.message);
        setWeather(err.message);
      }
    }
    getWeather();
  }, [])

  function iterateData(data) {
    const obj = {};
    for (let i in data) {
      obj[i] = data[i];
    }
    return JSON.stringify(obj)
  }

  return (
    <div className="bg-cyan-50 h-screen">
      <div>{weatherState && (typeof weatherState === 'object' ? iterateData(weatherState) : weatherState)}</div>
    </div>
  );
}

export default Main;