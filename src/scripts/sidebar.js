import * as generator from './domTool';
import locationComponent from './locationManager';


const sidebar = () => {
  const container = generator.elementGen('div', 'sidebar', 'sidebar');
  container.appendChild(locationComponent());
  return container;
}

export default sidebar;