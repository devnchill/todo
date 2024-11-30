import {  logic } from "./logic";
import { createTodoElement, createProjectElement } from "./helperfunction";

const dom = (function () {
  const Main = document.querySelector("main");
  const projectContainer = document.getElementById("__project_section");
  const clearMain = function () {
    Main.innerHTML = "";
  };

  const displayAllProjects = () => {
    projectContainer.innerHTML = "";
    const arrayOfAllProjects = logic.allProjects;
    arrayOfAllProjects.forEach((item) => {
      createProjectElement(item);
    });
  };

  const displayAllTodos = () => {
    clearMain();
    logic.allProjects.forEach((project) => {
      const todos = project.todos;
      todos.forEach((todo) => {
        createTodoElement(todo);
      });
    });
  };

  const displayTodoOfClickedProject = function (pid) {
    clearMain();
    const clickedProject = logic.allProjects.find(
      (item) => item.pid === parseInt(pid),
    );
    if (clickedProject) {
      clickedProject.todos.forEach((todo) => {
        createTodoElementForSpecificProject(todo);
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
