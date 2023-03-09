import React, { useEffect } from "react";
import * as weatherAction  from "../actions/weather";
import { useDispatch, useSelector } from "react-redux";

// Redux state is now in the props of the component
const WeatherPage = () => {
  const weather = useSelector((state) => state.weather);
  const renderWeather = () => {
    if (weather.loading) { 
      return (<p>Loading Weather...</p>)
    }
    return (
      <>{JSON.stringify(weather.result)}</>
    );
  }

const dispatch = useDispatch();
const updateWeather = () => {
  dispatch({
    type: weatherAction.GET_WEATHER
  })
}

useEffect(() => {
  dispatch({
    type: weatherAction.GET_WEATHER
  })
}, [dispatch]);


  return (
    <section>
      <h1>Result</h1>
      {renderWeather()}
      <div onClick={updateWeather}>change</div>
    </section>
  )
}

// Connect Redux to React
export default WeatherPage;