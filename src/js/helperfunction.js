function createCustomElement(tag, id, textcontent, classlist = []) {
  let element = document.createElement(tag);
  element.id = id;
  classlist.forEach((cls) => element.classList.add(cls));
  element.textContent = textcontent;
  return element;
}

export { createCustomElement };
