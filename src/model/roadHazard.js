import { ROAD_HAZARD } from "../api";
import geoLocation from "../utils/locationTracker";
const API_KEY = process.env.REACT_APP_API_KEY;
const DEFAULT_PLACE = process.env.REACT_APP_DEFAULT_PLACE;
const UNIT = process.env.REACT_APP_UNIT;

export default async function roadHazard() {
    const baseUrl = ROAD_HAZARD;
    const params = {
        // appid: API_KEY,
        // units: UNIT
    };
    const location = await geoLocation()
    if (location) {
        params.lat = Number(location.coords.latitude).toFixed(2);
        params.lon = Number(location.coords.longitude).toFixed(2);
        params.alt = 10;
        params.dt = "";
    } else {
        throw new Error("Location latitude and longitude are missing.");
    }
    const headers = new Headers();
    headers.append("x-access-token", process.env.REACT_APP_UV_API_KEY);
    headers.append("Content-Type", "application/json");
    const searchParams = new URLSearchParams(params);
    const url = new URL("/", baseUrl);
    url.pathname = "/api/v1/uv";
    https://api.openuv.io/api/v1/uv?lat=:lat&lng=:lng&alt=:alt&dt=:dt
    url.search = searchParams.toString();
    return fetch(url.toString(), {
        headers,
        redirect: "follow"
    }).then(res => res.json().then(data => data));
}