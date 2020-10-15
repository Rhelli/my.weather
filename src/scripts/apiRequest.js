import * as ls from './locationStorage';
import * as generator from './domTool';
import weatherObjects from './weatherObjects';

async function fetchMainWeatherData(cityName, units = null) {
  const apiKey = process.env.OPENWEATHER_KEY;
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`, { mode: 'cors' });
  const response = await apiRequest.json();
  return newMainWeatherObject(
    response.main.temp,
    response.name,
    generator.dateTimeGen(response.dt, response.timezone),
    weather.icon,
    weather.main
  )
}

async function fetchWeatherDetailsData(cityName, units = null) {
  const apiKey = process.env.OPENWEATHER_KEY;
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`, { mode: 'cors' });
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

export { fetchMainWeatherData, fetchWeatherDetailsData, fetchImageData }