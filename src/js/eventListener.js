import { dom } from "./dom";
import { logic } from "./logic";
import { inputHandling } from "./form";
import { Todo } from "./todo";

const attachEventListenersToProjects = () => {
  const DOM = document.getElementById("__dom");
  const PROJECTSECTION = document.getElementById("__project_section");
  const ALLTODOS = document.getElementById("__all_todos");
  const PROJECTFORM = document.getElementById("__project_form");
  const NEWPROJECTBTN = document.getElementById("__create_new_project");
  const CANCELPROJECT = document.getElementById("__project_cancel_btn_form");
  const NEWTODOBTN = document.getElementById("__create_new_todo_btn");
  const TODOFORM = document.getElementById("__todo_form");
  const CANCELTODO = document.getElementById("__todo_cancel_btn_form");

  ALLTODOS.addEventListener("click", dom.displayAllTodos);

  DOM.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-remove-btn")) {
      let tid = Number(e.target.id);
      logic.deleteTodo(tid);
      dom.displayAllTodos();
    } else if (e.target.classList.contains("todo-specific-remove-btn")) {
      let tid = Number(e.target.id);
      let pid = Number(logic.identifyProject(tid));
      logic.deleteTodo(tid);
      dom.displayTodoOfClickedProject(pid);
    }
  });

  PROJECTSECTION.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("project") ||
      e.target.classList.contains("project-title")
    ) {
      let pid = e.target.id;
      dom.displayTodoOfClickedProject(pid);
    } else if (e.target.classList.contains("project-remove-btn")) {
      let pid = Number(e.target.id);
      logic.deleteProject(pid);
      dom.displayAllProjects();
    }
  });

  NEWPROJECTBTN.addEventListener("click", (e) => {
    inputHandling.openProjectDialog();
  });

  PROJECTFORM.addEventListener("submit", (e) => {
    e.preventDefault();
    logic.createNewProject(inputHandling.extractProjectInput());
    dom.displayAllProjects();
    inputHandling.closeProjectDialog();
  });

  CANCELPROJECT.addEventListener("click", (e) => {
    e.preventDefault();
    inputHandling.closeProjectDialog();
  });

  NEWTODOBTN.addEventListener("click", () => {
    inputHandling.openTodoDialog();
  });

  TODOFORM.addEventListener("submit", (e) => {
    e.preventDefault();
    logic.addTodoToNewProject(
      Number(NEWTODOBTN.className),
      inputHandling.extractTodoInput(),
    );
    dom.displayTodoOfClickedProject(Number(NEWTODOBTN.className));
    inputHandling.closeTodoDialog(e.target);
  });

  CANCELTODO.addEventListener("click", (e) => {
    e.preventDefault();
    inputHandling.closeTodoDialog();
  });
};

export { attachEventListenersToProjects };
