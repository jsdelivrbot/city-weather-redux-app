// Axios is a library that is solely made for making Ajax request from the browser
// Doc: https://github.com/mzabriskie/axios
import axios from 'axios';
fs = require('./../../node_modules/fs');
var dotenv = require('./../../node_modules/dotenv');
import APIKEY from './../../config'
dotenv.load();
//const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + APIKEY;

// new ES6 syntax - template string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    // API call: http://openweathermap.org/forecast5
    // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
    const url = `${ROOT_URL}&q=${city},ca&units=metric`;

    const request = axios.get(url);

    console.log("Request : ", request);
    // payload is an optional property that goes along with actions that can contain some additional
    // data that describes this particular action.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}