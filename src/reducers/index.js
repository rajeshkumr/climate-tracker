import { combineReducers } from 'redux';
import weather from './weather';
import roadHazard from './roadHazard';
const reducers = combineReducers({
  weather,
  roadHazard
})
export default reducers;