import format from 'date-fns/format';
import * as ls from './locationStorage';
import popup from './errorMessage';

const fetchCityTimeData = async (lat, lng) => {
  const apiKey = process.env.TIMEZONE_KEY;
  const apiRequest = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`);
  const response = await apiRequest.json();
  const datetime = response.formatted;
  return datetime;
};

const fetchMainWeatherData = async (cityName) => {
  const apiKey = process.env.OPENWEATHER_KEY;
  const unitFormat = ls.loadItem('tempSwitch')[0];
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unitFormat}`, { mode: 'cors' });
  const response = await apiRequest.json();
  const requestedDatetime = await fetchCityTimeData(
    response.city.coord.lat,
    response.city.coord.lon,
  );
  if (response.cod === '404') {
    const main = document.getElementById('mainPageContainer');
    if (!document.getElementById('errorPopupContainer')) {
      main.appendChild(popup(response.message));
    }
  }
  return {
    temp: Math.round(response.list[0].main.temp * 1),
    cityName: response.city.name,
    country: response.city.country,
    datetime: format(new Date(requestedDatetime), 'p - cccc io, MMM yy'),
    icon: response.list[0].weather[0].id,
    main: response.list[0].weather[0].main,
    description: response.list[0].weather[0].description,
    lat: response.city.coord.lat,
    lon: response.city.coord.lon,
    dayOrNight: response.list[0].sys.pod,
  };
};

const fetchUvIndexData = async (lat, lon) => {
  const apiKey = OPENWEATHER_KEY;
  const apiRequest = await fetch(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const response = await apiRequest.json();
  const index = response;
  return index;
};


const fetchWeatherDetailsData = async (cityName) => {
  const apiKey = OPENWEATHER_KEY;
  const unitFormat = ls.loadItem('tempSwitch')[0];
  const apiRequest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unitFormat}`, { mode: 'cors' });
  const response = await apiRequest.json();
  const uvIndex = await fetchUvIndexData(response.city.coord.lat, response.city.coord.lon);
  return {
    feelsLike: response.list[0].main.feels_like,
    cloudCover: response.list[0].clouds.all,
    humidity: response.list[0].main.humidity,
    windSpeed: response.list[0].wind.speed,
    uvIndex: uvIndex.value,
  };
};

export { fetchMainWeatherData, fetchWeatherDetailsData, fetchCityTimeData };