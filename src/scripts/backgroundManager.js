import * as generator from './domTool';

const imageContainer = () => {
  const container = generator.elementGen('div', 'background-image-container', 'backgroundImageContainer');
  const backgroundImage = generator.elementGen('img', 'background-image', 'backgroundImage');
  container.appendChild(backgroundImage);
  return container;
};

const backgroundBuilder = (weatherObject) => {
  const backgroundImage = document.getElementById('backgroundImageContainer');
  const weather = `${weatherObject.description}`;
  const weatherTypes = [
    RegExp('clouds'),
    RegExp('gusts'),
    RegExp('dust'),
    RegExp('hail'),
    RegExp('haze'),
    RegExp('lightning'),
    RegExp('light rain'),
    RegExp('rain'),
    RegExp('smoke'),
    RegExp('snow'),
    RegExp('tornado'),
    RegExp('sunny'),
    RegExp('clear'),
  ];
  if (weatherObject.dayOrNight === 'd') {
    for (let i = 0; i < weatherTypes.length; i++) {
      if (weatherTypes[i].test(weather)) {
        backgroundImage.style.backgroundImage = `url(../src/assets/img/backgrounds/day/${i}.jpg)`;
      }
    }
    if (weatherTypes[12].test(weather)) {
      backgroundImage.style.backgroundImage = `url(../src/assets/img/backgrounds/day/${11}.jpg)`;
    }
  } else if (weatherObject.dayOrNight === 'n') {
    for (let i = 0; i < weatherTypes.length; i++) {
      if (weatherTypes[i].test(weather)) {
        backgroundImage.style.backgroundImage = `url(../src/assets/img/backgrounds/night/${i}.jpg)`;
      }
    }
    if (weatherTypes[12].test(weather)) {
      backgroundImage.style.backgroundImage = `url(../src/assets/img/backgrounds/night/${11}.jpg)`;
    }
  }
};

export { imageContainer, backgroundBuilder };