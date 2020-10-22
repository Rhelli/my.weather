import * as generator from './domTool';

const imageContainer = () => {
  const container = generator.elementGen('div', 'background-image-container', 'backgroundImageContainer');
  const backgroundImage = generator.elementGen('img', 'background-image', 'backgroundImage');
  container.appendChild(backgroundImage);
  return container;
}

const backgroundBuilder = (weatherObject) => {
  const backgroundImage = document.getElementById('backgroundImageContainer');
  const datetime = `${weatherObject.datetime}`;
  const weather = `${weatherObject.description}`;
  const dayTest = RegExp('AM');
  const nightTest = RegExp('PM');
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
  if (dayTest.test(datetime)) {
    for (let i = 0; i < weatherTypes.length; i++) {
      if (weatherTypes[i].test(weather)) {
        backgroundImage.style.backgroundImage = `url(../src/assets/img/backgrounds/day/${i}.jpg)`;
      }
    }
  } else if (nightTest.test(datetime)) {
    for (let i = 0; i < weatherTypes.length; i++) {
      if (weatherTypes[i].test(weather)) {
        backgroundImage.style.backgroundImage = `url(../src/assets/img/backgrounds/night/${i}.jpg)`;
      }
    }
  }
}

export { imageContainer, backgroundBuilder };