import { logic } from "./logic";
import {
  createTodoForAll,
  createProjectElement,
  createDefaultProjectElement,
} from "./helperFunction";

const dom = (function () {
  const CREATETODOBTN = document.getElementById("__floating_button");
  const DOM = document.getElementById("__todo_list");
  const MAINHEADER = document.getElementById("__main_header");
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
    MAINHEADER.textContent = "All Task";
    logic.allProjects.forEach((project) => {
      const todos = project.todos;
      todos.forEach((todo) => {
        createTodoForAll(todo);
      });
    });
  };

  const displayTodoOfClickedProject = function (pid) {
    clearDOM();
    CREATETODOBTN.dataset.id = pid;
    const clickedProject = logic.allProjects.find(
      (item) => item.pid === parseInt(pid),
    );
    if (clickedProject) {
      clickedProject.todos.forEach((todo) => {
        createTodoForAll(todo);
      });
    } else {
      console.log("project not found");
    }
  };

  const displayTodaysTodo = () => {
    clearDOM();
    MAINHEADER.textContent = "Today's ToDo";
    const todaysTodos = logic.findTodaysTodos();
    todaysTodos.forEach((todo) => {
      createTodoForAll(todo);
    });
  };

  const displayWeeksTodo = () => {
    clearDOM();
    MAINHEADER.textContent = "Weeks Todo";
    const todaysTodos = logic.findThisWeeksTodos();
    todaysTodos.forEach((todo) => {
      createTodoForAll(todo);
    });
  };

  const displayImportantTodos = () => {
    clearDOM();
    MAINHEADER.textContent = "Important Todos";
    const importantTodos = logic.findimportantTodo();
    importantTodos.forEach((todo) => {
      createTodoForAll(todo);
    });
  };

  return {
    displayImportantTodos,
    displayWeeksTodo,
    displayTodaysTodo,
    clearDOM,
    displayAllProjects,
    displayAllTodos,
    displayTodoOfClickedProject,
  };
})();

export { dom };
