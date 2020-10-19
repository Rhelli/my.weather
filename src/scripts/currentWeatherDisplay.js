import * as generator from './domTool';
import * as api from './apiRequest';

const currentTemp = () => {
  const container = generator.elementGen('div', 'current-temp-container', 'currentTempContainer');
  const currentTemp = generator.textGen('h1', '', 'current-temp', 'currentTemp');
  container.appendChild(currentTemp);
  return container;

}

//const currentTemp = () => {
//  //const mainWeatherObject = await api.fetchMainWeatherData('London');
//  const response = api.fetchMainWeatherData('London').
//    then(weatherObject => {
//      console.log(weatherObject)
//      const container = generator.elementGen('div', 'current-temp-container', 'currentTempContainer');
//      const currentTemp = generator.textGen('h1', `${weatherObject.temp}`, 'current-temp', 'currentTemp');
//      container.appendChild(currentTemp);
//      return container;
//    }, err => {
//      console.error(err)
//    })
//}

//const currentTemp = async () => {
//  const mainWeatherObject = await api.fetchMainWeatherData('London');
//  const container = generator.elementGen('div', 'current-temp-container', 'currentTempContainer');
//  console.log(mainWeatherObject)
//  const currentTemp = generator.textGen('h1', `${mainWeatherObject.temp}`, 'current-temp', 'currentTemp');
//  container.appendChild(currentTemp);
//  document.body.appendChild(container);
//}

//const currentTemp = () => {
//  return api
//    .fetchMainWeatherData("London")
//    .then((weatherObject) => {
//      console.log(weatherObject);
//      const container = generator.elementGen(
//        "div",
//        "current-temp-container",
//        "currentTempContainer"
//      );
//      console.log(weatherObject);
//      const currentTemp = generator.textGen(
//        "h1",
//        `${weatherObject.temp}`,
//        "current-temp",
//        "currentTemp"
//      );
//      container.appendChild(currentTemp);
//      return container;
//    })
//    .catch((err) => console.error(err));
//};

const currentLocationInfo = () => {
  const container = generator.elementGen('div', 'current-location-info-container', 'currentLocationInfoContainer');
  const currentLocationContainer = generator.elementGen('div', 'current-location-container', 'currentLocationContainer');
  const currentDatetimeContainer = generator.elementGen('div', 'current-datetime-container', 'currentDatetimeContainer');
  // PLACEHOLDER ------ //
  const currentLocation = generator.textGen('h3', 'London, UK', 'current-location', 'currentLocation');
  const currentDatetime = generator.textGen('p', "16:17*-*Tuesday,*13*Oct*'20", 'current-datetime', 'currentDatetime', '*');
  currentLocationContainer.appendChild(currentLocation);
  currentDatetimeContainer.appendChild(currentDatetime);
  container.append(currentLocationContainer, currentDatetimeContainer);
  return container;
}

const currentForecast = () => {
  const container = generator.elementGen('div', 'current-forecast', 'currentForecast');
  const currentForecastIconContainer = generator.elementGen('div', 'current-forecast-icon-container', 'currentForecastIconContainer');
  const currentForecastTextContainer = generator.elementGen('div', 'current-forecast-text-container', 'currentForecastTextContainer');
  const currentForecastExtraTextContainer = generator.elementGen('div', 'current-forecast-extra-text-container', 'currentForecastExtraTextContainer');
  // PLACEHOLDER ------- //
  const currentForecastIcon = generator.elementGen('i', 'current-forecast-icon', 'currentForecastIcon');
  currentForecastIcon.classList.add('wi')
  const currentForecastText = generator.textGen('p', 'Sunny', 'current-forecast-text', 'currentForecastText');
  const currentForecastExtraText = generator.textGen('p', 'Clear Skies and Sunshine', 'current-forecast-extra-text', 'currentForecastExtraText');
  currentForecastIconContainer.appendChild(currentForecastIcon);
  currentForecastTextContainer.appendChild(currentForecastText);
  currentForecastExtraTextContainer.appendChild(currentForecastExtraText);
  container.append(currentForecastIconContainer, currentForecastTextContainer, currentForecastExtraTextContainer);
  return container;
}

const assembleComponent = () => {
  const currentWeatherComponent = generator.componentBuilder('current-weather-component', 'currentWeatherComponent', currentTemp(), currentLocationInfo(), currentForecast());
  return currentWeatherComponent;
}

//const assembleComponent = () => {
//  //const currentWeatherComponent = generator.componentBuilder('current-weather-component', 'currentWeatherComponent', currentTemp(), currentLocationInfo(), currentForecast());
//  const currentWeatherComponent = generator.elementGen('div', 'current-weather-component', 'currentWeatherComponent');
//  currentTemp().then(response => {
//    currentWeatherComponent.appendChild(response);
//    return currentWeatherComponent
//  })
//}

export default assembleComponent;