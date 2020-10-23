import * as utility from './domTool';
import * as ls from './locationStorage';

const refreshButton = () => {
  const refreshContainer = utility.elementGen('div', 'refresh-button-container', 'refreshButtonContainer');
  const refreshButton = utility.elementGen('button', 'refresh-button', 'refreshButton');
  refreshButton.title = 'Update the current forecast.'
  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
  });
  const refreshIcon = utility.textGen('i', '<i*class="fas*fa-redo-alt"></i>', 'refresh-icon', 'refreshIcon', '*');
  refreshButton.appendChild(refreshIcon);
  refreshContainer.appendChild(refreshButton);
  return refreshContainer;
}

const deleteMyDataContainer = () => {
  const deleteMyDataContainer = utility.elementGen('div', 'delete-data-container', 'deleteDataContainer');
  const deleteMyDataButton = utility.elementGen('button', 'delete-my-data-button', 'deleteMyDataButton');
  deleteMyDataButton.title = 'Delete all your stored data.'
  deleteMyDataButton.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 500);
  })
  const buttonText = utility.textGen('i', '<i*class="far*fa-trash-alt"></i>', 'delete-my-data-icon', 'deleteMyDataIcon', '*');
  deleteMyDataButton.appendChild(buttonText);
  deleteMyDataContainer.appendChild(deleteMyDataButton);
  return deleteMyDataContainer;
}

const tempFormatSwitch = () => {
  const tempFormatContainer = utility.elementGen('div', 'temp-format-container', 'tempFormatContainer');
  const fahrenheit = utility.textGen('p', 'F', 'temp-format-f');
  const celsius = utility.textGen('p', 'C', 'temp-format-c');
  const tempSwitch = utility.elementGen('label', 'temp-switch-label', 'tempSwitchLabel');
  const checkbox = utility.elementGen('input', 'temp-switch-input', 'tempSwitchInput');
  checkbox.title = 'Switch between Celsius and Fahrenheit.';
  const slider = utility.elementGen('span', 'temp-switch-slider');
  checkbox.type = 'checkbox';

  const tempStatus = ls.loadItem('tempSwitch');
  if (tempStatus[0] === 'metric') {
    fahrenheit.classList.remove('highlighted');
    fahrenheit.classList.add('unhighlighted');
    celsius.classList.remove('unhighlighted');
    celsius.classList.add('highlighted');
    checkbox.checked = false;
  } else {
    celsius.classList.remove('highlighted');
    celsius.classList.add('unhighlighted');
    fahrenheit.classList.remove('unhighlighted');
    fahrenheit.classList.add('highlighted');
    checkbox.checked = true;
  }
  checkbox.addEventListener('click', (event) => {
    //event.preventDefault();
    const fLabel = document.querySelector('.temp-format-f');
    const cLabel = document.querySelector('.temp-format-c');
    let identifier = ls.loadItem('tempSwitch');
    if (identifier[0] === 'metric') {
      cLabel.classList.remove('highlighted');
      cLabel.classList.add('unhighlighted');
      fLabel.classList.remove('unhighlighted');
      fLabel.classList.add('highlighted');
      checkbox.checked = true;
      identifier = ['imperial'];
      ls.saveItem('tempSwitch', identifier);
    } else {
      fLabel.classList.remove('highlighted');
      fLabel.classList.add('unhighlighted');
      cLabel.classList.remove('unhighlighted');
      cLabel.classList.add('highlighted');
      checkbox.checked = false;
      identifier = ['metric'];
      ls.saveItem('tempSwitch', identifier);
    }
    setTimeout(() => {
      location.reload();
    }, 500);
  })
  tempSwitch.append(checkbox, slider);
  tempFormatContainer.append(celsius, tempSwitch, fahrenheit);
  return tempFormatContainer;
}

const shortcutComponent = () => {
  const shortcutBar = utility.componentBuilder('shortcut-bar', 'shortcutBar', refreshButton(), deleteMyDataContainer(), tempFormatSwitch());
  return shortcutBar;
}

export default shortcutComponent;

