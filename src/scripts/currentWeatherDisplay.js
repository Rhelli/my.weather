import * as generator from './domTool';

const currentTemp = () => {
  const container = generator.elementGen('div', 'current-temp-container', 'currentTempContainer');
  const currentTemp = generator.textGen('h1', '', 'current-temp', 'currentTemp');
  container.appendChild(currentTemp);
  return container;
};

const currentLocationInfo = () => {
  const container = generator.elementGen('div', 'current-location-info-container', 'currentLocationInfoContainer');
  const currentLocationContainer = generator.elementGen('div', 'current-location-container', 'currentLocationContainer');
  const currentDatetimeContainer = generator.elementGen('div', 'current-datetime-container', 'currentDatetimeContainer');
  const currentLocation = generator.textGen('h3', '', 'current-location', 'currentLocation');
  const currentDatetime = generator.textGen('p', '', 'current-datetime', 'currentDatetime');
  currentLocationContainer.appendChild(currentLocation);
  currentDatetimeContainer.appendChild(currentDatetime);
  container.append(currentLocationContainer, currentDatetimeContainer);
  return container;
};

const currentForecast = () => {
  const container = generator.elementGen('div', 'current-forecast', 'currentForecast');
  const currentForecastIconContainer = generator.elementGen('div', 'current-forecast-icon-container', 'currentForecastIconContainer');
  const currentForecastTextContainer = generator.elementGen('div', 'current-forecast-text-container', 'currentForecastTextContainer');
  const currentForecastExtraTextContainer = generator.elementGen('div', 'current-forecast-extra-text-container', 'currentForecastExtraTextContainer');
  const currentForecastIcon = generator.elementGen('i', 'current-forecast-icon', 'currentForecastIcon');
  currentForecastIcon.classList.add('wi');
  const currentForecastText = generator.textGen('p', '', 'current-forecast-text', 'currentForecastText');
  const currentForecastExtraText = generator.textGen('p', '', 'current-forecast-extra-text', 'currentForecastExtraText');
  currentForecastIconContainer.appendChild(currentForecastIcon);
  currentForecastTextContainer.appendChild(currentForecastText);
  currentForecastExtraTextContainer.appendChild(currentForecastExtraText);
  container.append(
    currentForecastIconContainer,
    currentForecastTextContainer,
    currentForecastExtraTextContainer,
  );
  return container;
};

const assembleComponent = () => {
  const currentWeatherComponent = generator.componentBuilder('current-weather-component', 'currentWeatherComponent', currentTemp(), currentLocationInfo(), currentForecast());
  return currentWeatherComponent;
};

export default assembleComponent;