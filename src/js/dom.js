import { logic } from "./logic";
import {
  createTodoForAll,
  createProjectElement,
  createTodoForSpecificProject,
  createDefaultProjectElement,
} from "./helperFunction";

const dom = (function () {
  const CREATETODOBTN = document.querySelector("#__create_new_todo_btn");
  const DOM = document.getElementById("__todo_list");
  const projectContainer = document.getElementById("__project_list");
  const clearDOM = function () {
    DOM.innerHTML = "";
  };

  const displayAllProjects = () => {
    projectContainer.innerHTML = "";
    const arrayOfAllProjects = logic.allProjects;
    arrayOfAllProjects.forEach((item) => {
      if (item.pid === 0) {
        createDefaultProjectElement(item);
      } else {
        createProjectElement(item);
      }
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
    CREATETODOBTN.setAttribute("class", pid);
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

  const displayTodaysTodo = () => {
    clearDOM();
    const todaysTodos = logic.findTodaysTodos();
    todaysTodos.forEach((todo) => {
      createTodoForAll(todo);
    });
  };

  return {
    displayTodaysTodo,
    clearDOM,
    displayAllProjects,
    displayAllTodos,
    displayTodoOfClickedProject,
  };
})();

export { dom };
