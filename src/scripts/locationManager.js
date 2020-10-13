import * as generator from './domTool';

const addLocation = () => {
  const container = generator.elementGen('div', 'new-location-input-container', 'newLocationInputContainer');
  const form = generator.elementGen('form', 'new-location-form', 'newLocationForm');
  const input = generator.elementGen('input', 'new-location-input', 'newLocationInput');
  const submitButton = generator.elementGen('button', 'new-location-submit', 'newLocationSubmit');
  submitButton.type = 'submit';
  const buttonText = generator.textGen('p', 'Save');
  submitButton.appendChild(buttonText);
  form.append(input, submitButton);
  container.appendChild(form);
  return container;
}

const locationList = () => {
  const container = generator.elementGen('div', 'location-list', 'locationList');
  return container;
}

const assembleComponent = () => {
  const locationComponent = generator.componentBuilder('location-component', 'locationComponent', addLocation(), locationList());
  return locationComponent;
}

export default assembleComponent;