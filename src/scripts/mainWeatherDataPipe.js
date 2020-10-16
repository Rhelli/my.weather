import * as utility from './domTool';
import * as api from './apiRequest';

const appendApiData = () => {
  api.fetchMainWeatherData('Mexico City')
    .then(weatherObject => {
      const mainTempDisplay = document.getElementById('currentTemp');
      const mainLocationDisplay = document.getElementById('currentLocation');
      //const mainDatetimeDisplay = document.getElementById('currentDatetime');
      mainTempDisplay.innerHTML = `${weatherObject.temp}`;
      mainLocationDisplay.innerHTML = `${weatherObject.cityName}, ${utility.countryCodeFormatter(weatherObject.country)}`;

    })
}

export default appendApiData;