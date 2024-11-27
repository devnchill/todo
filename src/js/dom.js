import { project } from "./projects";
import { createCustomElement } from "./helperfunction";

const projectContainer = document.getElementById("projects");
const Main = document.querySelector("main");
const dom = (function () {
  const clearMain = function () {
    Main.innerHTML = "";
  };
  const dispalyAllProjects = () => {
    const allProject = project.allProjects;
    allProject.forEach((item) => {
      const projectDiv = createCustomElement("div", item.pid, item.name, [
        "projects",
      ]);
      projectContainer.appendChild(projectDiv);
    });
  };

  const displayAllTodos = () => {
    clearMain();
    project.allProjects.forEach((project) => {
      const todos = project.todos;
      todos.forEach((todo) => {
        const todoDiv = createCustomElement("div", todo.tid, todo.title, [
          "todo",
        ]);
        Main.appendChild(todoDiv);
      });
    });
  };

  const displayTodoOfClickedProject = function (pid) {
    const clickedProject = project.allProjects.find((item) => item.pid === pid);
  };

  return {
    clearMain,
    dispalyAllProjects,
    displayAllTodos,
    displayTodoOfClickedProject,
  };
})();
export { dom };
