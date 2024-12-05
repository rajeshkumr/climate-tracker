// Create Redux action types
export const GET_WEATHER = "GET_WEATHER";
export const CONFIRM_WEATHER = "CONFIRM_WEATHER";

// Create Redux action creators that return an action
export const weather = (result) => ({
  type: GET_WEATHER,
  payload: result,
});

export const confirmWeather = (result) => ({
  type: CONFIRM_WEATHER,
  payload: result
})

