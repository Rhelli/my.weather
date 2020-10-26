import * as generator from './domTool';
import * as ls from './locationStorage';
import { imageContainer } from './backgroundManager';
import shortcutComponent from './shortcutBar';
import currentWeatherComponent from './currentWeatherDisplay';
import sidebar from './sidebar';
import { citySelector } from './mainWeatherDataPipe';

(function storageInit() {
  if (!ls.loadItem('locationStorage') || ls.loadItem('locationStorage').length < 1) {
    const allLocations = [];
    ls.saveItem('locationStorage', allLocations);
  }
  if (!ls.loadItem('tempSwitch') || ls.loadItem('tempSwitch').length < 1) {
    const tempFormat = ['metric'];
    ls.saveItem('tempSwitch', tempFormat);
  }
}());

const pageBuilder = () => {
  const mainContainer = generator.elementGen('div', 'main-page-container', 'mainPageContainer');
  mainContainer.append(shortcutComponent(), currentWeatherComponent(), sidebar(), imageContainer());
  return mainContainer;
};

(function locationLoader() {
  citySelector();
}());

export default pageBuilder;