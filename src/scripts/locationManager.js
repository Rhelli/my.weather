import * as generator from './domTool';
import * as ls from './locationStorage';

const addLocation = () => {
  const container = generator.elementGen('div', 'new-location-input-container', 'newLocationInputContainer');
  const form = generator.elementGen('div', 'new-location-form', 'newLocationForm');
  const input = generator.elementGen('input', 'new-location-input', 'newLocationInput');
  input.placeholder = 'Add a new location...';
  input.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      ls.saveLocation();
    }
  })
  const submitButton = generator.elementGen('button', 'new-location-submit', 'newLocationSubmit');
  submitButton.type = 'button';
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    ls.saveLocation();
  })
  const buttonText = generator.textGen('p', '<i*class="fas*fa-plus"></i>', 'new-location-submit-text', 'newLocationSubmitText', '*');
  submitButton.appendChild(buttonText);
  form.append(input, submitButton);
  container.appendChild(form);
  return container;
}

const loadLocations = () => {
  const allLocations = ls.loadItem('locationStorage');
  if (allLocations.length > 0) {
    return allLocations;
  }
}

const locationList = () => {
  const container = generator.elementGen('div', 'location-list', 'locationList');
  const savedLocations = loadLocations();
  if (savedLocations && savedLocations.length > 0) {
    for (let i = 0; i < savedLocations.length; i++) {
      const listItem = generator.elementGen('div', 'location-list-item-container', `locationListItemContainer${i}`);
      const locationText = generator.textGen('p', `${savedLocations[i]}`, 'location-list-text', `locationListText${savedLocations[i]}`);
      const locationDeleteButton = generator.elementGen('button', 'location-list-button', `locationListButton${savedLocations[i]}`);
      locationDeleteButton.type = 'button';
      const locationDeleteButtonText = generator.textGen('p', '<i*class="fas*fa-times"></i>', 'location-delete-button-text', 'locationDeleteButtonText', '*');
      locationDeleteButton.addEventListener('click', (event) => {
        event.preventDefault();
        ls.deleteLocation(i);
      });
      locationDeleteButton.appendChild(locationDeleteButtonText);
      listItem.append(locationText, locationDeleteButton);
      container.appendChild(listItem);
    }
  }
  return container;
}

const assembleComponent = () => {
  const locationComponent = generator.componentBuilder('location-component', 'locationComponent', addLocation(), locationList());
  return locationComponent;
}

export default assembleComponent;