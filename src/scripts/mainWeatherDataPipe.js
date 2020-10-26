import * as utility from './domTool';
import * as ls from './locationStorage';
import * as api from './apiRequest';
import popup from './errorMessage';
import { backgroundBuilder } from './backgroundManager';

const appendMainWeatherData = (cityName) => {
  api.fetchMainWeatherData(cityName)
    .then(weatherObject => {
      const currentTemp = document.getElementById('currentTemp');
      const currentLocation = document.getElementById('currentLocation');
      const currentDatetime = document.getElementById('currentDatetime');
      const currentForecast = document.getElementById('currentForecastIcon');
      const currentForecastText = document.getElementById('currentForecastText');
      const currentForecastExtraText = document.getElementById('currentForecastExtraText');
      currentTemp.innerHTML = `${weatherObject.temp}°`;
      currentLocation.innerHTML = `${weatherObject.cityName}`;
      currentDatetime.innerHTML = `${weatherObject.datetime}`;
      currentForecast.classList.add(`wi-owm-${weatherObject.icon}`);
      currentForecastText.innerHTML = `${weatherObject.main}`;
      currentForecastExtraText.innerHTML = utility.capitalize(`${weatherObject.description}`);
      backgroundBuilder(weatherObject);
    });
};

const appendWeatherDetailsData = (cityName) => {
  api.fetchWeatherDetailsData(cityName)
    .then(weatherDetails => {
      const feelsLike = document.getElementById('feelsLikeData');
      const cloudCover = document.getElementById('cloudCoverData');
      const humidity = document.getElementById('humidityData');
      const windSpeed = document.getElementById('windSpeedData');
      const uvIndex = document.getElementById('uvIndexData');
      feelsLike.innerHTML = `${Math.round(weatherDetails.feelsLike * 1)}°`;
      cloudCover.innerHTML = `${weatherDetails.cloudCover} %`;
      humidity.innerHTML = `${weatherDetails.humidity} %`;
      windSpeed.innerHTML = `${weatherDetails.windSpeed} M/s`;
      uvIndex.innerHTML = utility.uvConverter(`${weatherDetails.uvIndex}`);
    }).catch((errorMessage) => {
      const mainContainer = document.getElementById('mainPageContainer');
      mainContainer.appendChild(popup(errorMessage));
    });
};

const citySelector = (cityName) => {
  let city;
  if (cityName) {
    appendMainWeatherData(cityName);
    appendWeatherDetailsData(cityName);
  } else if (ls.loadItem('lastSelected') && ls.loadItem('lastSelected').length > 0) {
    city = ls.loadItem('lastSelected');
    appendMainWeatherData(city);
    appendWeatherDetailsData(city);
  } else if (ls.loadItem('locationStorage').length > 0) {
    [city] = ls.loadItem('locationStorage');
    appendMainWeatherData(city);
    appendWeatherDetailsData(city);
  }
};

export { appendMainWeatherData, appendWeatherDetailsData, citySelector };