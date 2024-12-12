import { logic } from "../logic";
import { inputHandling } from "../form";
import { dom } from "../dom";

const listenersToTodo = () => {
  const TODOLIST = document.getElementById("__todo_list");
  const ADDTODO = document.getElementById("__floating_button");
  const TODOFORM = document.getElementById("__todo_form");
  const CANCELTODO = document.getElementById("__todo_cancel_btn_form");
  const MAINHEADER = document.getElementById("__main_header");
  const VIEWDIALOG = document.getElementById("__view_todo_dialog");
  const CLOSEVIEWTODODIALOGICON = document.querySelector(".fa-circle-xmark");

  TODOLIST.addEventListener("click", (e) => {
    const starIcon = e.target.closest(".important-star");
    const todoItem = e.target.closest(".todo");
    const completeButton = e.target.closest(".todo-complete-btn");
    const deleteTodoButton = e.target.closest(".todo-remove-btn");

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
    } else if (deleteTodoButton && todoItem) {
      const tid = Number(e.target.closest(".todo-remove-btn").dataset.tid);
      const pid = logic.identifyProject(tid);
      logic.deleteTodo(tid);
      if (MAINHEADER.textContent === "All Task") {
        dom.displayAllTodos();
      } else {
        dom.displayTodoOfClickedProject(pid);
      }
    } else if (todoItem && e.target.classList.contains("todo-title") || e.target.classList.contains("todo-date")) {
      const tid = Number(e.target.dataset.tid);
      VIEWDIALOG.dataset.tid = tid;
      const todo = logic.findTodoByTid(tid);
      inputHandling.viewTodo(todo);
      VIEWDIALOG.showModal();
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

  CLOSEVIEWTODODIALOGICON.addEventListener("click", () => {
    VIEWDIALOG.close();
  });
};

export { listenersToTodo };
