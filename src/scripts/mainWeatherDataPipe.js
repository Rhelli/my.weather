import * as utility from './domTool';
import * as ls from './locationStorage';
import * as api from './apiRequest';

const appendMainWeatherData = (cityName) => {
  const componentElementIds = ['currentTemp', 'currentLocation', 'currentDatetime', 'currentForecastIcon', 'currentForecastText', 'currentForecastExtraText'];
  const componentDataNames = ['temp', 'cityName', 'datetime', 'icon', 'main', 'description'];
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
      currentForecastExtraText.innerHTML = `${weatherObject.description}`;
    })
}

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
    })
}

const citySelector = (cityName) => {
  let city;
  if (ls.loadItem('lastSelected') && !cityName) {
    city = ls.loadItem('lastSelected');
    appendMainWeatherData(city);
    appendWeatherDetailsData(city);
  } else if (!cityName && ls.loadItem('locationStorage').length > 0) {
    city = ls.loadItem('locationStorage')[0];
    appendMainWeatherData(city);
    appendWeatherDetailsData(city)
  } else if (cityName) {
    appendMainWeatherData(cityName);
    appendWeatherDetailsData(cityName);
  } else {
    return;
  }
}

export { appendMainWeatherData, appendWeatherDetailsData, citySelector };