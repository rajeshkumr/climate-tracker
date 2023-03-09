import * as weatherActions from '../actions/weather';

export const initialState = { loading: true }

export default function weather(state = initialState, action) {
  switch (action.type) {
    case weatherActions.GET_WEATHER:
      return {
        ...state,
        loading: true,
        result: action.result
      }

    case weatherActions.CONFIRM_WEATHER:
      return {
        ...state,
        loading: false,
        result: action.result
      }

    default:
      return state
  }
}