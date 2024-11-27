import { dom } from "./dom";
import "/src/css/layout.css";

dom.displayAllProjects();

const allTodos = document.getElementById("all-todos");
allTodos.addEventListener("click", dom.displayAllTodos);

const allProjects = document.getElementById("projects");
allProjects.addEventListener("click", (e) => {
  dom.displayTodoOfClickedProject(e.target.id);
});
