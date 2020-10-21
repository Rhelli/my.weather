import * as generator from './domTool';
import * as api from './apiRequest';

const backgrounds = ['Clear', 'Cloudy Gusts', 'Cloudy', 'Dust', 'Hail', 'Haze', 'Lightning', 'Light Rain', 'Rain', 'Smoke', 'Snow', 'Tornado'];

const imageContainer = (cityName) => {
  api.fetchMainWeatherData(cityName)
    .then(weatherData => {
      const container = generator.elementGen('div', 'background-image-container', 'backgroundImageContainer');
      const backgroundImage = generator.elementGen('img', 'background-image', 'backgroundImage');
      const datetime = weatherData.datetime;
      const weather = weatherData.description;
      // DEFINE WHETHER IT IS DAY OR NIGHT
      //    THEN DEFINE WHAT WEATHER TYPE IT IS AND SERVE A BACKGROUND
      //    DEPENDING ON TRUE/FALSE. USE REGEX? 


      if (datetime.test(/AM/)) {
        if (weatherData.)
      } else {

      }
      backgroundImage.src = '../src/assets/img/clear-day.jpg';
      container.appendChild(backgroundImage);
      return container;
    })
};

export default imageContainer;