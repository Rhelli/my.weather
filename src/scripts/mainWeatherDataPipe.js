import * as utility from './domTool';
import * as api from './apiRequest';

const city = 'London';
const appendMainWeatherData = () => {
  const componentElementIds = ['currentTemp', 'currentLocation', 'currentDatetime', 'currentForecastIcon', 'currentForecastText', 'currentForecastExtraText'];
  const componentDataNames = ['temp', 'cityName', 'datetime', 'icon', 'main', 'description'];
  api.fetchMainWeatherData(city)
    .then(weatherObject => {
      for (let i = 0; i < componentElementIds.length; i++) {
        const element = document.getElementById(`${componentElementIds[i]}`);
        const dataName = `${componentDataNames[i]}`;
        if (element.id === 'currentTemp') {
          element.innerHTML = `${weatherObject.temp}°`;
        } else if (element.id === 'currentForecastIcon') {
          element.classList.add(`wi-owm-${weatherObject.icon}`);
        } else if (element.id === 'currentForecastExtraText') {
          element.innerHTML = utility.capitalize(`${weatherObject.description}`);
        } else {
          element.innerHTML = `${weatherObject[dataName]}`;
        }
      }
    })
}

const appendWeatherDetailsData = () => {
  const listItems = ['feelsLike', 'cloudCover', 'humidity', 'windSpeed', 'uvIndex'];
  api.fetchWeatherDetailsData(city)
    .then(weatherDetails => {
      for (let i = 0; i < listItems.length; i++) {
        const element = document.getElementById(`${listItems[i]}Data`);
        const listItem = `${listItems[i]}`;
        if (element.id === 'cloudCoverData' || element.id === 'humidityData') {
          element.innerHTML = `${weatherDetails[listItem]} %`;
        } else if (element.id === 'windSpeedData') {
          element.innerHTML = `${weatherDetails[listItem]} M/s`;
        } else if (element.id === 'feelsLikeData') {
          element.innerHTML = `${Math.round(weatherDetails[listItem] * 1)}°`;
        } else {
          element.innerHTML = `${weatherDetails[listItem]}`;
        }
      }
    })
}

export { appendMainWeatherData, appendWeatherDetailsData };