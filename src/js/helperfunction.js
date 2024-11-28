import { dom } from "./dom";
import { project } from "./projects";

function createCustomElement(tag, id, textcontent, classlist = []) {
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  classlist.forEach((cls) => element.classList.add(cls));
  return element;
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

function createProjectElement() {
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
const attachEventListenersToProjects = () => {
  const allProjectElements = document.querySelectorAll(".individualProject");
  const showAllTodoBtn = document.querySelector("#all-todos");
  const deleteSpecificProjectButton =
    document.querySelectorAll("#project-remove");
  const allRemoveTodoBtn = document.querySelectorAll(".todo-remove-btn");

  allProjectElements.forEach((item) => {
    item.addEventListener("click", (e) => {
      dom.displayTodoOfClickedProject(e.currentTarget.id);
    });
  });

  //showAllTodoBtn.addEventListener("click", dom.displayAllTodos);
  showAllTodoBtn.addEventListener("click", () => {
    dom.displayAllTodos();
    attachEventListenersToProjects();
  });

  deleteSpecificProjectButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      let pid = e.target.parentElement.id;
      pid = Number(pid);
      project.deleteProject(pid);
      dom.displayAllProjects();
      attachEventListenersToProjects();
    });
  });

  allRemoveTodoBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let tid = Number(e.target.parentElement.id);
      console.log(tid);
      project.deleteTodo(tid);
      dom.displayAllTodos();
      attachEventListenersToProjects();
    });
  });
};
export {
  createCustomElement,
  attachEventListenersToProjects,
  createTodoElement,
  createProjectElement,
};
