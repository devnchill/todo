const projectContainer = document.getElementById("__project_list");

function createCustomElement({
  tag,
  dataAttributes = {},
  textContent = "",
  classList = [],
}) {
  if (!Array.isArray(classList)) {
    console.error("Invalid classList:", classList);
    classList = [];
  }

  const element = document.createElement(tag);
  Object.entries(dataAttributes).forEach(([key, value]) => {
    element.setAttribute(`data-${key}`, value);
  });

  element.textContent = textContent;
  classList.forEach((cls) => element.classList.add(cls));
  return element;
}

function createTodoForAll(todo) {
  const DOM = document.getElementById("__todo_list");
  const todoDiv = createCustomElement({
    tag: "div",
    dataAttributes: { tid: todo.tid },
    classList: ["todo"],
  });

  const todoTitle = createCustomElement({
    tag: "p",
    dataAttributes: { tid: todo.tid },
    textContent: todo.title,
    classList: ["todo-title"],
  });

  const todoRemoveBtn = createCustomElement({
    tag: "button",
    dataAttributes: { tid: todo.tid },
    textContent: "remove",
    classList: ["todo-remove-btn"],
  });

  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoRemoveBtn);
  DOM.appendChild(todoDiv);
}

function createDefaultProjectElement(item) {
  const projectDiv = createCustomElement({
    tag: "div",
    dataAttributes: { pid: item.pid },
    classList: ["project"],
  });

  const projectTitle = createCustomElement({
    tag: "p",
    dataAttributes: { pid: item.pid },
    textContent: item.name,
    classList: ["project-title"],
  });

  projectDiv.appendChild(projectTitle);
  projectContainer.appendChild(projectDiv);
}

function createProjectElement(item) {
  const projectDiv = createCustomElement({
    tag: "div",
    dataAttributes: { pid: item.pid },
    classList: ["project"],
  });

  const projectTitle = createCustomElement({
    tag: "p",
    dataAttributes: { pid: item.pid },
    textContent: item.name,
    classList: ["project-title"],
  });

  const projectDeleteButton = createCustomElement({
    tag: "button",
    dataAttributes: { pid: item.pid },
    textContent: "remove",
    classList: ["project-remove-btn"],
  });

  projectDiv.appendChild(projectTitle);
  projectDiv.appendChild(projectDeleteButton);
  projectContainer.appendChild(projectDiv);
}

function createTodoForSpecificProject(todo) {
  const DOM = document.getElementById("__todo_list");
  const todoDiv = createCustomElement({
    tag: "div",
    dataAttributes: { tid: todo.tid },
    classList: ["todo-specific"],
  });

  const todoTitle = createCustomElement({
    tag: "p",
    dataAttributes: { tid: todo.tid },
    textContent: todo.title,
    classList: ["todo-specific-title"],
  });

  const todoRemoveBtn = createCustomElement({
    tag: "button",
    dataAttributes: { tid: todo.tid },
    textContent: "remove",
    classList: ["todo-specific-remove-btn"],
  });

  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoRemoveBtn);
  DOM.appendChild(todoDiv);
}

export {
  createTodoForAll,
  createProjectElement,
  createDefaultProjectElement,
  createTodoForSpecificProject,
};
