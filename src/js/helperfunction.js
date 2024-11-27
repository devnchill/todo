function createCustomElement(tag, id, textcontent) {
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  return element;
}

export { createCustomElement };
