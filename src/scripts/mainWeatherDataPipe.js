import * as utility from './domTool';
import * as api from './apiRequest';

const appendMainWeatherData = () => {
  api.fetchMainWeatherData('Puebla')
    .then(weatherObject => {
      const mainTempDisplay = document.getElementById('currentTemp');
      const mainLocationDisplay = document.getElementById('currentLocation');
      const mainDatetimeDisplay = document.getElementById('currentDatetime');
      const mainWeatherIcon = document.getElementById('currentForecastIcon');
      const mainWeatherSummary = document.getElementById('currentForecastText');
      const mainWeatherExtraInfo = document.getElementById('currentForecastExtraText');
      console.log(weatherObject.icon);
      mainTempDisplay.innerHTML = `${weatherObject.temp}°`;
      mainLocationDisplay.innerHTML = `${weatherObject.cityName}, ${utility.countryCodeFormatter(weatherObject.country)}`;
      mainDatetimeDisplay.innerHTML = `${weatherObject.datetime}`;
      mainWeatherIcon.classList.add(`wi-owm-${weatherObject.icon}`);
      mainWeatherSummary.innerHTML = `${weatherObject.main}`;
      mainWeatherExtraInfo.innerHTML = utility.capitalize(`${weatherObject.description}`);
    })
}

export { appendMainWeatherData };