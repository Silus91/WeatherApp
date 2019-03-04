import axios from 'axios';

const API_KEY ='ab08a9dfc54c811d36ae599090dbd922';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}