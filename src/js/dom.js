import { project } from "./projects";
import {
  createCustomElement,
  createTodoElement,
  createProjectElement,
} from "./helperfunction";

const Main = document.querySelector("main");
const projectContainer = document.getElementById("projectSection");
const dom = (function () {
  const clearMain = function () {
    Main.innerHTML = "";
  };

  const displayAllProjects = () => {
    projectContainer.innerHTML = "";
    const arrayOfAllProjects = project.allProjects;
    arrayOfAllProjects.forEach((item) => {
      createProjectElement(item);
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
