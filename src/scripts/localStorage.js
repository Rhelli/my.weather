const saveItem = (string, object) => { localStorage.setItem(string, JSON.stringify(object)) };

const loadItem = (string) => JSON.parse(localStorage.getItem(string));

const deleteItem = string => localStorage.removeItem(string);

export { saveItem, loadItem, deleteItem };