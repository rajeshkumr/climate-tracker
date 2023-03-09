import * as hazardActions from '../actions/roadHazard';

export const initialState = { loading: true }

export default function roadHazard(state = initialState, action) {
  switch (action.type) {
    case hazardActions.GET_HAZARD:
      return {
        ...state,
        loading: true,
        result: action.result
      }

    case hazardActions.CONFIRM_HAZARD:
      return {
        ...state,
        loading: false,
        result: action.result
      }

    default:
      return state
  }
}