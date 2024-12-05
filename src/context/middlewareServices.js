import * as weatherAction  from "../actions/weather";
import * as hazardAction  from "../actions/roadHazard";
import weather from "../model/weather";
import roadHazard from "../model/roadHazard";

export const fetchWeatherService = (store) => (next) => (action) => {
  if (action.type === weatherAction.GET_WEATHER) {
      weather().then(result => {
        store.dispatch({
          type: weatherAction.CONFIRM_WEATHER,
          result
        })
      })
  }
  if (action.type === hazardAction.GET_HAZARD) {
    roadHazard().then(result => {
      store.dispatch({
        type: hazardAction.CONFIRM_HAZARD,
        result
      })
    })
}
  return next(action);
}