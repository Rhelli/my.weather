import * as api from './apiRequest';

const fetchMainWeatherData = async (cityName) => {
  const apiKey = process.env.OPENWEATHER_KEY;
  const unitFormat = 'metric'
  const apiRequest = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unitFormat}`, { mode: 'cors' });
  const response = await apiRequest.json();
  //const requestedDatetime = await fetchCityTimeData(response.city.coord.lat, response.city.coord.lon);
  return {
    temp: Math.round(response.list[0].main.temp * 1),
    cityName: response.city.name,
    //datetime: requestedDatetime,
    //datetime: format(new Date(unparsedDatetime), 'p - cccc io, MMM yy'),
    icon: response.list[0].weather[0].icon,
    main: response.list[0].weather[0].main,
  }
}

const appendApiData = () => {
  fetchMainWeatherData('London')
    .then(weatherObject => {
      const mainTempDisplay = document.getElementById('currentTemp');
      mainTempDisplay.innerHTML = `${weatherObject.temp}`;
    })
}

export default appendApiData;