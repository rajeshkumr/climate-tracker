import { WEATHER_BASIC } from "../api";
import geoLocation from "../utils/locationTracker";
const API_KEY = process.env.REACT_APP_API_KEY;
const DEFAULT_PLACE = process.env.REACT_APP_DEFAULT_PLACE;
const UNIT = process.env.REACT_APP_UNIT;

export default async function weather() {
    const baseUrl = WEATHER_BASIC;
    const params = {
        appid: API_KEY,
        units: UNIT
    };
    const location = await geoLocation()
    if (location) {
        params.lat = location.coords.latitude;
        params.lon = location.coords.longitude;
    } else {
        params.q = DEFAULT_PLACE;
    }
    const searchParams = new URLSearchParams(params);
    const url = new URL("/", baseUrl);
    url.pathname = "/data/2.5/weather";
    url.search = searchParams.toString();
    return fetch(url.toString()).then(res => res.json().then(data => data));
}