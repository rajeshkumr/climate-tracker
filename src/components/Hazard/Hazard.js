// External imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as hazardAction from "../../actions/roadHazard";

// Local Imports
// import weather from "../../model/weather";

function Hazard() {
  const weather = useSelector((state) => state.weather);
  const renderWeather = () => {
    if (weather.loading) {
      return (<div className="min-h-[25vh]">Loading Hazard...</div>)
    } else {
      const weatherResult = weather?.result;
      return (
        <div>
          <div>{weatherResult.name}</div>
          <img className="m-auto" src={`http://openweathermap.org/img/wn/${weatherResult?.weather[0].icon}@2x.png`} />
          <div className="flex items-center justify-around">
            <div>
              <div><span className="font-bold text-2xl align-middle">{weatherResult.main.temp}</span>°C</div>
              <div>{weatherResult.weather[0].description}</div>
            </div>
            <div>
              <div className="mr-5">Feels <span className="font-bold">{weatherResult.main.feels_like}</span>°C</div>
              <div>
              <span className="mr-5">Min <span className="font-bold">{weatherResult.main.temp_min}</span>°C</span>
              <span className="mr-5">Max <span className="font-bold">{weatherResult.main.temp_max}</span>°C</span>
              </div>
              <div>
              <span className="mr-5">Sunrise <span className="font-bold">{new Date(weatherResult.sys.sunrise * 1000).toLocaleTimeString()}</span></span>
              <span className="mr-5">Sunset <span className="font-bold">{new Date(weatherResult.sys.sunset * 1000).toLocaleTimeString()}</span></span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: hazardAction.GET_HAZARD
    })
  }, [dispatch]);
  // const [weatherState, setWeather] = useState("...loading");
  // useEffect(() => {
  //   async function getWeather() {
  //     try {
  //       const data = await weather();
  //       console.table(data);
  //       setWeather(data.main);
  //     } catch (err) {
  //       console.error("Weather error", err);
  //       alert(err.message);
  //       setWeather(err.message);
  //     }
  //   }
  //   getWeather();
  // }, [])

  // function iterateData(data) {
  //   const obj = {};
  //   for (let i in data) {
  //     obj[i] = data[i];
  //   }
  //   return JSON.stringify(obj)
  // }

  return (
    // <div className="bg-cyan-50 h-screen">
    //   <div>{weatherState && (typeof weatherState === 'object' ? iterateData(weatherState) : weatherState)}</div>
    // </div>
    <>
      {renderWeather()}
    </>
  );
}

export default Hazard;