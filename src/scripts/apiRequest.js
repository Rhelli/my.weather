import format from 'date-fns/format';
import { newMainWeatherObject, newWeatherDetailsObject } from './weatherObjects';

const fetchCityTimeData = async (lat, lng) => {
  const apiKey = process.env.TIMEZONE_KEY;
  const apiRequest = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`);
  const response = await apiRequest.json();
  const datetime = response.formatted;
  return datetime;
}

const fetchMainWeatherData = async (cityName) => {
  const apiKey = process.env.OPENWEATHER_KEY;
  const unitFormat = 'metric'
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unitFormat}`, { mode: 'cors' });
  const response = await apiRequest.json();
  const requestedDatetime = await fetchCityTimeData(response.city.coord.lat, response.city.coord.lon);
  return {
    temp: Math.round(response.list[0].main.temp * 1),
    cityName: response.city.name,
    country: response.city.country,
    datetime: requestedDatetime,
    datetime: format(new Date(requestedDatetime), 'p - cccc io, MMM yy'),
    icon: response.list[0].weather[0].id,
    main: response.list[0].weather[0].main,
    description: response.list[0].weather[0].description,
  }
}


const fetchWeatherDetailsData = async (cityName) => {
  const apiKey = process.env.OPENWEATHER_KEY;
  const unitFormat = 'metric';
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unitFormat}`, { mode: 'cors' });
  const response = await apiRequest.json();
  return newWeatherDetailsObject(
    response.list[0].main.feels_like,
    response.list[0].clouds.all,
    response.list[0].main.humidity,
    response.list[0].wind.speed
  )
}

export { fetchMainWeatherData, fetchWeatherDetailsData, fetchCityTimeData }