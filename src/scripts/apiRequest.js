import * as ls from './locationStorage';
import * as generator from './domTool';
import weatherObjects from './weatherObjects';

async function fetchMainWeatherData(cityName, units = null) {
  const apiKey = process.env.OPENWEATHER;
  const cityName = ls.loadItem('locationStorage')[0];
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${units}`, { mode: 'cors' });
  const response = await apiRequest.json();
  return newMainWeatherObject(
    response.main.temp,
    response.name,
    generator.dateTimeGen(response.dt, response.timezone),
    weather.icon,
    weather.main
  )
}

async function fetchImageData() {
  const apiKey = process.env.UNSPLASH_API_KEY
  const secretKey = process.env.UNSPLASH_SECRET_KEY
}
console.log(apiKey);