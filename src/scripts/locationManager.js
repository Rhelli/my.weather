import * as generator from './domTool';
import * as ls from './locationStorage';

const addLocation = () => {
  const container = generator.elementGen('div', 'new-location-input-container', 'newLocationInputContainer');
  const form = generator.elementGen('form', 'new-location-form', 'newLocationForm');
  const input = generator.elementGen('input', 'new-location-input', 'newLocationInput');
  input.placeholder = 'Add a new location...';
  const submitButton = generator.elementGen('button', 'new-location-submit', 'newLocationSubmit');
  submitButton.type = 'button';
  const buttonText = generator.textGen('p', '<i*class="fas*fa-plus"></i>', 'new-location-submit-text', 'newLocationSubmitText', '*');
  submitButton.appendChild(buttonText);
  form.append(input, submitButton);
  container.appendChild(form);
  return container;
}

setTimeout(() => {
  (function () {
    const submitButton = document.getElementById('newLocationSubmit');
    const inputField = document.getElementById('newLocationInput');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      ls.saveLocation();
    })
  })();
}, 100);

const locationList = () => {
  const container = generator.elementGen('div', 'location-list', 'locationList');
  return container;
}

const assembleComponent = () => {
  const locationComponent = generator.componentBuilder('location-component', 'locationComponent', addLocation(), locationList());
  return locationComponent;
}

export default assembleComponent;