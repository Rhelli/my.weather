import * as generator from './domTool';
import backgroundImage from './backgroundManager';
import currentWeatherComponent from './currentWeatherDisplay';

const pageBuilder = () => {
  const mainContainer = generator.elementGen('div', 'main-page-container', 'mainPageContainer');
  mainContainer.append(backgroundImage(), currentWeatherComponent());
  return mainContainer;
}

export default pageBuilder;