const projectContainer = document.getElementById("projectSection");
function createCustomElement(tag, id, textcontent, classlist = []) {
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  classlist.forEach((cls) => element.classList.add(cls));
  return element;
}

function createTodoElementForSpecificProject(todo) {
  const Main = document.querySelector("main");
  const todoDiv = createCustomElement("div", todo.tid, "", ["specificTodo"]);
  const todoTitle = createCustomElement(
    "p",
    "p-specific-todo-title",
    todo.title,
    ["specific-todo-title"],
  );
  const todoRemoveBtn = createCustomElement("button", "", "Remove", [
    "specific-remove-btn",
  ]);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoRemoveBtn);
  Main.appendChild(todoDiv);
}

function createTodoElement(todo) {
  const Main = document.querySelector("main");
  const todoDiv = createCustomElement("div", todo.tid, "", ["individualTodo"]);
  const todoTitle = createCustomElement("p", "p-todo-title", todo.title, [
    "todo-title",
  ]);
  const todoRemoveBtn = createCustomElement("button", "", "Remove", [
    "todo-remove-btn",
  ]);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoRemoveBtn);
  Main.appendChild(todoDiv);
}

function createProjectElement(item) {
  const projectDiv = createCustomElement("div", item.pid, "", [
    "individualProject",
  ]);
  const projectTitle = createCustomElement("p", "project-title", item.name, [
    "p-title",
  ]);
  const projectDeleteButton = createCustomElement(
    "button",
    "project-remove",
    "delete",
    ["p-delete-button"],
  );
  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectDeleteButton);
  projectContainer.appendChild(projectDiv);
}

export {
  createCustomElement,
  createTodoElement,
  createProjectElement,
  createTodoElementForSpecificProject,
};
