import * as ls from './locationStorage';
import * as generator from './domTool';
import { newMainWeatherObject, newWeatherDetailsObject } from './weatherObjects';

async function fetchCityTimeData(lat, lng) {
  const apiKey = process.env.TIMEZONE_KEY;
  const apiRequest = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`);
  const response = await apiRequest.json();
  const datetime = await response.formatted;
  return datetime;
}

async function fetchMainWeatherData(cityName) {
  if (cityName) {
    const apiKey = process.env.OPENWEATHER_KEY;
    const unitFormat = 'metric'
    const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unitFormat}`, { mode: 'cors' });
    const response = await apiRequest.json();
    return newMainWeatherObject(
      await Math.round(response.list[0].main.temp * 1),
      await response.city.name,
      await fetchCityTimeData(response.city.coord.lat, response.city.coord.lon),
      await response.list[0].weather[0].icon,
      await response.list[0].weather[0].main,
    )
  }
}

async function fetchWeatherDetailsData(cityName) {
  const apiKey = process.env.OPENWEATHER_KEY;
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`, { mode: 'cors' });
  const response = await apiRequest.json();
  return newWeatherDetailsObject(
    response.feels_like,
    response.clouds.all,
    response.main.humidity,
    response.wind.speed
  )
}

async function fetchImageData() {
  const apiKey = process.env.UNSPLASH_API_KEY
  const secretKey = process.env.UNSPLASH_SECRET_KEY
}

export { fetchMainWeatherData, fetchWeatherDetailsData, fetchImageData, fetchCityTimeData }