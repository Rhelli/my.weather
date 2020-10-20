const saveItem = (string, object) => {
  localStorage.setItem(string, JSON.stringify(object))
};

const loadItem = (string) => JSON.parse(localStorage.getItem(string));

const deleteItem = string => localStorage.removeItem(string);

const saveLocation = () => {
  let newLocation;
  const allLocations = loadItem('locationStorage');
  if (document.getElementById('newLocationInput').value !== '') {
    newLocation = document.getElementById('newLocationInput').value;
    allLocations.push(newLocation);
    saveItem('locationStorage', allLocations);
    location.reload();
  }
}

const deleteLocation = (id) => {
  const savedLocations = loadItem('locationStorage');
  if (savedLocations.length > 0) {
    savedLocations.splice(id, 1);
    saveItem('locationStorage', savedLocations);
    location.reload();
  }
}

const lastSelected = (cityName) => {
  if (loadItem('lastSelected') && loadItem('lastSelected').length > 0) {
    const citySelection = loadItem('lastSelected')[0];
    citySelection = cityName;
    saveItem('lastSelected', citySelection);
  } else {
    const newSelection = [cityName];
    saveItem('lastSelected', newSelection);
  }
}

export { saveItem, loadItem, deleteItem, saveLocation, deleteLocation, lastSelected };