const projectContainer = document.getElementById("__project_section");
function createCustomElement(tag, id, textcontent, classlist = []) {
  if (!Array.isArray(classlist)) {
    console.error("Invalid classlist:", classlist);
    classlist = [];
  }
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  classlist.forEach((cls) => element.classList.add(cls));
  return element;
}

function createTodoForAll(todo) {
  const Main = document.querySelector("main");
  const todoDiv = createCustomElement("div", todo.tid, "", ["todo"]);
  const todoTitle = createCustomElement("p", todo.tid, todo.title, [
    "todo-title",
  ]);
  const todoRemoveBtn = createCustomElement("button", todo.tid, "remove", [
    "todo-remove-btn",
  ]);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoRemoveBtn);
  Main.appendChild(todoDiv);
}

function createProjectElement(item) {
  const projectDiv = createCustomElement("div", item.pid, "", ["project"]);
  const projectTitle = createCustomElement("p", item.pid, item.name, [
    "project-title",
  ]);
  const projectDeleteButton = createCustomElement(
    "button",
    item.pid,
    "remove",
    ["project-remove-btn"],
  );
  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectDeleteButton);
  projectContainer.appendChild(projectDiv);
}

function createTodoForSpecificProject(todo) {
  const Main = document.querySelector("main");
  const todoDiv = createCustomElement("div", todo.tid, "", ["todo-specific"]);
  const todoTitle = createCustomElement("p", todo.tid, todo.title, [
    "todo-specific-title",
  ]);
  const todoRemoveBtn = createCustomElement("button", todo.tid, "remove", [
    "todo-specific-remove-btn",
  ]);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoRemoveBtn);
  Main.appendChild(todoDiv);
}

export { createTodoForAll, createProjectElement, createTodoForSpecificProject };
