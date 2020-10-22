import * as utility from './domTool';

const popup = (errorMessage) => {
  const container = utility.elementGen('div', 'error-popup-container', 'errorPopupContainer');
  const closeButton = utility.elementGen('button', 'popup-close-button', 'popupCloseButton');
  const buttonText = utility.textGen('p', '<i*class="fas*fa-plus"></i>', 'popup-close-button-text', 'popupCloseButtonText', '*');
  closeButton.appendChild(buttonText);
  const title = utility.textGen('h3', 'Oops!', 'popup-error-title', 'popupErrorTitle');
  const errorMessageContainer = utility.elementGen('div', 'error-message-container', 'errorMessageContainer');
  const errorMessageIntro = utility.textGen('p', 'It*looks*like*an*error*occurred!', 'error-message-intro', 'errorMessageIntro', '*');
  const errorMessageBody = utility.textGen('p', 'This*is*most*likely*because*you*added*a*location*that*does*not*exist.*Would*you*like*to*remove*it?', 'error-message-body', 'errorMessageBody', '*');
  errorMessageContainer.append(errorMessageIntro, errorMessageBody);
  const removeLocationButton = utility.elementGen('button', 'error-fix-button', 'errorFixButton');
  const removeLocationButtonText = utility.textGen('p', 'Remove Location', 'error-fix-button-text', 'errorFixButtonText');
  removeLocationButton.appendChild(removeLocationButtonText);
  container.append(closeButton, title, errorMessageContainer, removeLocationButton);
  return container;
}

export default popup;