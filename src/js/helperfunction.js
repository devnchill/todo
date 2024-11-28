import { dom } from "./dom";
import { project } from "./projects";

function createCustomElement(tag, id, textcontent, classlist = []) {
  let element = document.createElement(tag);
  element.id = id;
  element.textContent = textcontent;
  classlist.forEach((cls) => element.classList.add(cls));
  return element;
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
export { createCustomElement, attachEventListenersToProjects };
