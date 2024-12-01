import { dom } from "./dom";
import { logic } from "./logic";

const attachEventListenersToProjects = () => {
  const DOM = document.getElementById("__dom");
  const PROJECTSECTION = document.getElementById("__project_section");
  const ALLTODOS = document.getElementById("__all_todos");
  const NEWPROJECTBTN = document.getElementById("__create_new_project");

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

  NEWPROJECTBTN.addEventListener("click", () => {
    logic.createNewProject("alphabetagamatheta"), dom.displayAllProjects();
  });
};

export { attachEventListenersToProjects };
