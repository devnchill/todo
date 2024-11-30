import { dom } from "./dom";
import { logic } from "./logic";

const attachEventListenersToProjects = () => {
  const MAIN = document.querySelector("main");
  const PROJECTSECTION = document.getElementById("__project_section");
  const ALLTODOS = document.getElementById("__all_todos");

  ALLTODOS.addEventListener("click", dom.displayAllTodos);

  MAIN.addEventListener("click", (e) => {
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
};

export { attachEventListenersToProjects };
