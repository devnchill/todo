import { logic } from "../logic";
import { inputHandling } from "../form";
import { dom } from "../dom";

const listenersToTodo = () => {
  const TODOLIST = document.getElementById("__todo_list");
  const ADDTODO = document.getElementById("__floating_button");
  const TODOFORM = document.getElementById("__todo_form");
  const CANCELTODO = document.getElementById("__todo_cancel_btn_form");

  TODOLIST.addEventListener("click", (e) => {
    if (
      e.target.closest(".todo") &&
      e.target.classList.contains("important-star")
    ) {
      console.log("Star clicked!");
      const todoItem = e.target.closest(".todo");
      const tidOfTodo = Number(todoItem.dataset.tid);
      const starIcon = todoItem.querySelector(".important-star");
      const todo = logic.findTodoByTid(tidOfTodo);

      if (todo) {
        todo.toggleImportant();
        if (starIcon) {
          starIcon.classList.toggle("active");
        }
      }
    }
  });

  ADDTODO.addEventListener("click", () => {
    inputHandling.openTodoDialog();
  });

  TODOFORM.addEventListener("submit", (e) => {
    e.preventDefault();
    logic.addTodoToNewProject(
      Number(ADDTODO.dataset.id),
      inputHandling.extractTodoInput(),
    );
    dom.displayTodoOfClickedProject(Number(ADDTODO.dataset.id));
    inputHandling.closeTodoDialog(e.target);
  });

  CANCELTODO.addEventListener("click", (e) => {
    e.preventDefault();
    inputHandling.closeTodoDialog();
  });
};

export { listenersToTodo };
