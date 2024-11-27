import { dom } from "./dom";
import "/src/css/layout.css";
dom.dispalyAllProjects();
const allTodos = document.getElementById("all-todos");
allTodos.addEventListener("click", dom.displayAllTodos);
