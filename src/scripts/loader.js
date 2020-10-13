import * as generator from './domTool';
import backgroundImage from './backgroundManager';
import currentWeatherComponent from './currentWeatherDisplay';
import sidebar from './sidebar';

const pageBuilder = () => {
  const mainContainer = generator.elementGen('div', 'main-page-container', 'mainPageContainer');
  mainContainer.append(backgroundImage(), currentWeatherComponent(), sidebar());
  return mainContainer;
}

export default pageBuilder;