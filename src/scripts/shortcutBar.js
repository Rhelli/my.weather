import * as utility from './domTool';

const refreshButton = () => {
  const refreshContainer = utility.elementGen('div', 'refresh-button-container', 'refreshButtonContainer');
  const refreshButton = utility.elementGen('button', 'refresh-button', 'refreshButton');
  refreshButton.title = 'Update the current forecast.'
  const refreshIcon = utility.textGen('i', '<i*class="fas*fa-redo-alt"></i>', 'refresh-icon', 'refreshIcon', '*');
  refreshButton.appendChild(refreshIcon);
  refreshContainer.appendChild(refreshButton);
  return refreshContainer;
}

const deleteMyDataContainer = () => {
  const deleteMyDataContainer = utility.elementGen('div', 'delete-data-container', 'deleteDataContainer');
  const deleteMyDataButton = utility.elementGen('button', 'delete-my-data-button', 'deleteMyDataButton');
  deleteMyDataButton.title = 'Delete all your stored data.'
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
  const slider = utility.elementGen('span', 'temp-switch-slider');
  checkbox.type = 'checkbox';
  tempSwitch.append(checkbox, slider);
  tempFormatContainer.append(celsius, tempSwitch, fahrenheit);
  return tempFormatContainer;
}

const shortcutComponent = () => {
  const shortcutBar = utility.componentBuilder('shortcut-bar', 'shortcutBar', refreshButton(), deleteMyDataContainer(), tempFormatSwitch());
  return shortcutBar;
}

export default shortcutComponent;

