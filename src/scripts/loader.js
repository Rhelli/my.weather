import * as generator from './domTool';
import * as ls from './locationStorage';
import backgroundImage from './backgroundManager';
import shortcutComponent from './shortcutBar';
import currentWeatherComponent from './currentWeatherDisplay';
import sidebar from './sidebar';
import { citySelector } from './mainWeatherDataPipe';

(function () {
  if (!ls.loadItem('locationStorage') || ls.loadItem('locationStorage').length < 1) {
    const allLocations = [];
    ls.saveItem('locationStorage', allLocations);
  } else {
    return
  }
})();

const pageBuilder = () => {
  const mainContainer = generator.elementGen('div', 'main-page-container', 'mainPageContainer');
  mainContainer.append(backgroundImage(), shortcutComponent(), currentWeatherComponent(), sidebar());
  return mainContainer;
}

(function () {
  citySelector();
})();

export default pageBuilder;