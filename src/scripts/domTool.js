const elementGen = (tag, className = null, idName = null) => {
  const element = document.createElement(tag);
  if (className) { element.classList.add(className) };
  if (idName) { element.id = idName };
  return element;
}

const textGen = (tag, text, symbol, className = null, idName = null) => {
  const element = document.createElement(tag);
  const unparsedText = text.split('');
  const spacedText = [];
  unparsedText.forEach(char => {
    if (char === symbol) {
      spacedText.push(' ');
    } else {
      spacedText.push(char);
    }
  })
  const parsedText = spacedText.join('');
  element.innerHTML = parsedText;
  if (className) { element.classList.add(className) };
  if (idName) { element.id = idName };
  return element;
}

export { elementGen, textGen }