import * as generator from './domTool';
import * as api from './apiRequest';

const mainWeatherObject = api.fetchMainWeatherData('London')
console.log(mainWeatherObject);

const currentTemp = (mainWeatherObject) => {
  const container = generator.elementGen('div', 'current-temp-container', 'currentTempContainer');
  // PLACEHOLDER ------- //
  const currentTemp = generator.textGen('h1', `${mainWeatherObject}`, 'current-temp', 'currentTemp');
  container.appendChild(currentTemp);
  return container;
}

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
  // PLACEHOLDER ------- //
  const currentForecastIcon = generator.textGen('p', '<i*class="wi*wi-day-sunny"></i>', 'current-forecast-icon', 'currentForecastIcon', '*');
  const currentForecastText = generator.textGen('p', 'Sunny', 'current-forecast-text', 'currentForecastText');
  currentForecastIconContainer.appendChild(currentForecastIcon);
  currentForecastTextContainer.appendChild(currentForecastText);
  container.append(currentForecastIconContainer, currentForecastTextContainer);
  return container;
}

const assembleComponent = () => {
  const currentWeatherComponent = generator.componentBuilder('current-weather-component', 'currentWeatherComponent', currentTemp(), currentLocationInfo(), currentForecast());
  return currentWeatherComponent;
}

export default assembleComponent;