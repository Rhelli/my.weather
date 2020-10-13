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

export { saveItem, loadItem, deleteItem, saveLocation };