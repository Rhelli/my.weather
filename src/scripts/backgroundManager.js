import * as generator from './domTool';

const imageContainer = () => {
  const container = generator.elementGen('div', 'background-image-container', 'backgroundImageContainer');
  const backgroundImage = generator.elementGen('img', 'background-image', 'backgroundImage');
  backgroundImage.src = '../src/assets/img/clear-day.jpg';
  container.appendChild(backgroundImage);
  return container;
};

export default imageContainer;