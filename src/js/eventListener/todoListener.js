import { logic } from "../logic";
import { inputHandling } from "../form";
import { dom } from "../dom";

const listenersToTodo = () => {
  const TODOLIST = document.getElementById("__todo_list");
  const ADDTODO = document.getElementById("__floating_button");
  const TODOFORM = document.getElementById("__todo_form");
  const CANCELTODO = document.getElementById("__todo_cancel_btn_form");

  TODOLIST.addEventListener("click", (e) => {
    const starIcon = e.target.closest(".important-star");
    const todoItem = e.target.closest(".todo");
    const completeButton = e.target.closest(".todo-complete-btn");

    if (starIcon && todoItem) {
      console.log("Star clicked!");
      const tidOfTodo = Number(todoItem.dataset.tid);
      const todo = logic.findTodoByTid(tidOfTodo);
      if (!todo) {
        console.error("Todo not found with the given tid:", tid);
        return;
      }
      todo.toggleImportant();
      starIcon.classList.toggle("active");
    } else if (completeButton && todoItem) {
      const todo = logic.findTodoByTid(Number(todoItem.dataset.tid));
      if (!todo) {
        console.log("Todo not found with given tid:", tid);
        return;
      }
      todo.toggleComplete();
      todoItem.classList.toggle("todo-completed");
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
