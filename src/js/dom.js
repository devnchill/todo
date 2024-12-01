import { logic } from "./logic";
import {
  createTodoForAll,
  createProjectElement,
  createTodoForSpecificProject,
} from "./helperfunction";

const dom = (function () {
  const DOM = document.getElementById("__dom");
  const projectContainer = document.getElementById("__project_section");
  const clearDOM = function () {
    DOM.innerHTML = "";
  };

  const displayAllProjects = () => {
    projectContainer.innerHTML = "";
    const arrayOfAllProjects = logic.allProjects;
    arrayOfAllProjects.forEach((item) => {
      createProjectElement(item);
    });
  };

  const displayAllTodos = () => {
    clearDOM();
    logic.allProjects.forEach((project) => {
      const todos = project.todos;
      todos.forEach((todo) => {
        createTodoForAll(todo);
      });
    });
  };

  const displayTodoOfClickedProject = function (pid) {
    clearDOM();
    const clickedProject = logic.allProjects.find(
      (item) => item.pid === parseInt(pid),
    );
    if (clickedProject) {
      clickedProject.todos.forEach((todo) => {
        createTodoForSpecificProject(todo);
      });
    } else {
      console.log("project not found");
    }
  };

  return {
    clearDOM,
    displayAllProjects,
    displayAllTodos,
    displayTodoOfClickedProject,
  };
})();

export { dom };
