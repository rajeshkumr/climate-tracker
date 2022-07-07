import locationTracker from "../utils/locationTracker";
const API_KEY = "c599f1167a6c7a07d079c48c9d86bdc7";
const DEFAULT_PLACE = "Vancouver";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${DEFAULT_PLACE}&appid=${API_KEY}&units=metric`;
export default function weather(){
    return locationTracker();
}