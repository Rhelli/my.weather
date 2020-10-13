import * as generator from './domTool';
import locationComponent from './locationManager';
import weatherDetailsComponent from './weatherDetails';


const sidebar = () => {
  const container = generator.elementGen('div', 'sidebar', 'sidebar');
  container.append(locationComponent(), weatherDetailsComponent());
  return container;
}

export default sidebar;