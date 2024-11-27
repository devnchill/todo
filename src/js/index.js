import { dom } from "./dom";
import "/src/css/layout.css";

dom.displayAllProjects();

const allTodos = document.getElementById("all-todos");
allTodos.addEventListener("click", dom.displayAllTodos);

const projectSection = document.querySelectorAll(".individualProject");
projectSection.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    dom.displayTodoOfClickedProject(e.target.id);
  });
});
console.log(projectSection);
