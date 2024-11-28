import { project } from "./projects";
import { createCustomElement, createTodoElement } from "./helperfunction";

const projectContainer = document.getElementById("projectSection");
const Main = document.querySelector("main");
const dom = (function () {
  const clearMain = function () {
    Main.innerHTML = "";
  };

  const displayAllProjects = () => {
    projectContainer.innerHTML = "";
    const arrayOfAllProjects = project.allProjects;
    arrayOfAllProjects.forEach((item) => {
      const projectDiv = createCustomElement("div", item.pid, "", [
        "individualProject",
      ]);
      const projectTitle = createCustomElement(
        "p",
        "project-title",
        item.name,
        ["p-title"],
      );
      const projectDeleteButton = createCustomElement(
        "button",
        "project-remove",
        "delete",
        ["p-delete-button"],
      );
      projectDiv.appendChild(projectTitle);
      projectDiv.appendChild(projectDeleteButton);
      projectContainer.appendChild(projectDiv);
    });
  };

  const displayAllTodos = () => {
    clearMain();
    project.allProjects.forEach((project) => {
      const todos = project.todos;
      todos.forEach((todo) => {
        createTodoElement(todo);
      });
    });
  };

  const displayTodoOfClickedProject = function (pid) {
    clearMain();
    const clickedProject = project.allProjects.find(
      (item) => item.pid === parseInt(pid),
    );
    if (clickedProject) {
      clickedProject.todos.forEach((todo) => {
        createTodoElement(todo);
      });
    } else {
      console.log("project not found");
    }
  };

  return {
    clearMain,
    displayAllProjects,
    displayAllTodos,
    displayTodoOfClickedProject,
  };
})();
export { dom };
