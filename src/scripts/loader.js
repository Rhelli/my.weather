import * as generator from './domTool';
import backgroundImage from './backgroundManager';

const pageBuilder = () => {
  const mainContainer = generator.elementGen('div', 'main-page-container', 'mainPageContainer');
  mainContainer.appendChild(backgroundImage());
  return mainContainer;
}

export default pageBuilder;