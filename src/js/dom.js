import { project } from "./projects";
import { createCustomElement } from "./helperfunction";

const projectContainer = document.getElementById("projects");
const Main = document.querySelector("main");
const dom = (function () {
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
  return { dispalyAllProjects, displayAllTodos };
})();
export { dom };
