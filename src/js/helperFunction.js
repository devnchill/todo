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

  const todoDate = createCustomElement({
    tag: "p",
    dataAttributes: { tid: todo.tid },
    textContent: todo.dueDate,
    classList: ["todo-date"],
  });
  const todoImportantBtn = createCustomElement({
    tag: "button",
    dataAttributes: { tid: todo.tid },
    classList: ["todo-important-btn"],
  });

  const importantIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
  );
  importantIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  importantIcon.setAttribute("width", "24");
  importantIcon.setAttribute("height", "24");
  importantIcon.setAttribute("viewBox", "0 0 24 24");
  importantIcon.setAttribute("class", "important-star");
  importantIcon.innerHTML = `<polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9"/>`;

  if (todo.important) {
    importantIcon.classList.add("active");
  }
  const todoRemoveBtn = createCustomElement({
    tag: "button",
    dataAttributes: { tid: todo.tid },
    classList: ["todo-remove-btn"],
  });
  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fas", "fa-trash-alt");

  todoImportantBtn.appendChild(importantIcon);
  todoRemoveBtn.appendChild(removeIcon);
  const todoCompleteBtn = createCustomElement({
    tag: "button",
    dataAttributes: { tid: todo.tid },
    classList: ["todo-complete-btn"],
  });

  if(todo.complete === true){
    todoDiv.classList.add("todo-completed");
  }

  todoDiv.appendChild(todoCompleteBtn);
  todoDiv.appendChild(todoDate);
  todoDiv.appendChild(todoTitle);
  todoDiv.appendChild(todoImportantBtn);
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
    classList: ["project-remove-btn"],
  });

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fas", "fa-trash-alt");

  projectDeleteButton.appendChild(removeIcon);
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
