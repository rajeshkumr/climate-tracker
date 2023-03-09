// Create Redux action types
export const GET_HAZARD = "GET_HAZARD";
export const CONFIRM_HAZARD = "CONFIRM_HAZARD";

// Create Redux action creators that return an action
export const hazard = (result) => ({
  type: GET_HAZARD,
  payload: result,
});

export const confirmHazard = (result) => ({
  type: CONFIRM_HAZARD,
  payload: result
})

