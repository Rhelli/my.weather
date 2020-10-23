import * as utility from './domTool';
import * as ls from './locationStorage';

const popup = (errorMessage) => {
  const container = utility.elementGen('div', 'error-popup-container', 'errorPopupContainer');
  const closeButton = utility.elementGen('button', 'popup-close-button', 'popupCloseButton');
  const buttonText = utility.textGen('p', '<i*class="fas*fa-plus"></i>', 'popup-close-button-text', 'popupCloseButtonText', '*');
  closeButton.appendChild(buttonText);
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    const mainPageContainer = document.getElementById('mainPageContainer');
    container.classList.remove('error-popup-entrance');
    container.classList.add('error-popup-exit');
    setTimeout(() => {
      mainPageContainer.removeChild(errorPopupContainer);
    }, 300);
  });
  const title = utility.textGen('h3', 'Oops!', 'popup-error-title', 'popupErrorTitle');
  const errorMessageContainer = utility.elementGen('div', 'error-message-container', 'errorMessageContainer');
  const errorMessageIntro = utility.textGen('p', 'It*looks*like*an*error*occurred!', 'error-message-intro', 'errorMessageIntro', '*');
  const errorMessageBody = utility.textGen('p', 'This*is*most*likely*because*you*added*a*location*that*does*not*exist.*Would*you*like*to*remove*it?', 'error-message-body', 'errorMessageBody', '*');
  errorMessageContainer.append(errorMessageIntro, errorMessageBody);
  const errorLocation = ls.loadItem('lastSelected')[0];
  const removeLocationButton = utility.elementGen('button', 'error-fix-button', 'errorFixButton');
  const removeLocationButtonText = utility.textGen('p', `Remove "${errorLocation}"`, 'error-fix-button-text', 'errorFixButtonText');
  removeLocationButton.appendChild(removeLocationButtonText);
  removeLocationButton.addEventListener('click', (event) => {
    event.preventDefault();
    ls.deleteError();
  });
  container.append(closeButton, title, errorMessageContainer, removeLocationButton);
  container.classList.add('error-popup-entrance');
  return container;
};

export default popup;