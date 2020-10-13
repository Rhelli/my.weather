import * as generator from './domTool';
import * as ls from './locationStorage';
import backgroundImage from './backgroundManager';
import currentWeatherComponent from './currentWeatherDisplay';
import sidebar from './sidebar';

(function () {
  if (ls.loadItem('locationStorage').length < 1) {
    const allLocations = [];
    ls.saveItem('locationStorage', allLocations);
  }
})();

const pageBuilder = () => {
  const mainContainer = generator.elementGen('div', 'main-page-container', 'mainPageContainer');
  mainContainer.append(backgroundImage(), currentWeatherComponent(), sidebar());
  return mainContainer;
}

export default pageBuilder;