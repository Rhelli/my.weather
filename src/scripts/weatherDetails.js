import * as generator from './domTool';

const detailsSubtitle = () => {
  const container = generator.elementGen('div', 'weather-details-subtitle', 'weatherDetailsSubtitle');
  const text = generator.textGen('h5', 'Weather*Details', 'weather-details-text', 'weatherDetailsText', '*');
  container.appendChild(text);
  return container;
}

const detailsList = () => {
  const container = generator.elementGen('div', 'weather-details-list', 'weatherDetailsList');
  const detailTypesArray = ['Feels*Like', 'Cloud*Cover', 'Humidity', 'Wind*Speed', 'UV*Index'];
  const detailsClasses = ['feels-like', 'cloud-cover', 'humidity', 'wind-speed', 'uv-index'];
  const detailsIds = ['feelsLike', 'cloudCover', 'humidity', 'windSpeed', 'uvIndex'];
  for (let i = 0; i < detailTypesArray.length; i++) {
    const detailsContainer = generator.elementGen('div', `${detailsClasses[i]}-container`, `${detailsIds[i]}Container`);
    const elementLabel = generator.textGen('p', `${detailTypesArray[i]}`, `${detailsClasses[i]}-label`, `${detailsIds[i]}Label`, '*');
    const elementData = generator.textGen('p', '', `${detailsClasses[i]}-data`, `${detailsIds[i]}Data`);
    detailsContainer.append(elementLabel, elementData);
    container.appendChild(detailsContainer);
  }
  return container;
}

const assembleComponent = () => {
  const weatherDetailsComponent = generator.componentBuilder('weather-details-component', 'weatherDetailsComponent', detailsSubtitle(), detailsList());
  return weatherDetailsComponent;
}

export default assembleComponent;