import { logic } from "../logic";
import { inputHandling } from "../form";
import { updateEmptyState } from "../themeSwitch";
import { dom } from "../dom";

const listenersToTodo = () => {
  const DOM = document.getElementById("__todo_list");
  const ADDTODO = document.getElementById("__floating_button");
  const TODOFORM = document.getElementById("__todo_form");
  const CANCELTODO = document.getElementById("__todo_cancel_btn_form");
  const MAINHEADER = document.getElementById("__main_header");
  const VIEWDIALOG = document.getElementById("__view_todo_dialog");
  const CLOSEVIEWTODODIALOGICON = document.querySelector(".fa-circle-xmark");
  const EDITTODOBUTTON = document.getElementById("__edit_todo_button");
  const EDITTODODIALOG = document.getElementById("__todo_edit_form_dialog");
  const TODOEDITFORM = document.getElementById("__todo_edit_form");
  const CLOSEEDITFORMBUTTON = document.getElementById(
    "__todo_edit_cancel_btn_form",
  );

  DOM.addEventListener("click", (e) => {
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
      logic.syncStorage("save");
    } else if (completeButton && todoItem) {
      const todo = logic.findTodoByTid(Number(todoItem.dataset.tid));
      if (!todo) {
        console.log("Todo not found with given tid:", tid);
        return;
      }
      todo.toggleComplete();
      todoItem.classList.toggle("todo-completed");
      logic.syncStorage("save");
    } else if (deleteTodoButton && todoItem) {
      const tid = Number(e.target.closest(".todo-remove-btn").dataset.tid);
      const pid = logic.identifyProject(tid);
      logic.deleteTodo(tid);
      if (MAINHEADER.textContent === "All Task") {
        dom.displayAllTodos();
        updateEmptyState();
      } else {
        dom.displayTodoOfClickedProject(pid);
        updateEmptyState();
      }
    } else if (
      (todoItem && e.target.classList.contains("todo-title")) ||
      e.target.classList.contains("todo-date")
    ) {
      const tid = Number(e.target.dataset.tid);
      VIEWDIALOG.dataset.tid = tid;
      EDITTODODIALOG.dataset.tid = tid;
      EDITTODOBUTTON.dataset.tid = tid;
      TODOEDITFORM.dataset.tid = tid;
      const todo = logic.findTodoByTid(tid);
      inputHandling.viewTodo(todo);
      VIEWDIALOG.showModal();
      updateEmptyState();
    }
  });

  ADDTODO.addEventListener("click", () => {
    inputHandling.openTodoDialog();
    updateEmptyState();
  });

  TODOFORM.addEventListener("submit", (e) => {
    e.preventDefault();
    logic.addTodoToNewProject(
      Number(ADDTODO.dataset.id),
      inputHandling.extractTodoInput(),
    );
    dom.displayTodoOfClickedProject(Number(ADDTODO.dataset.id));
    inputHandling.closeTodoDialog(e.target);
    updateEmptyState();
  });

  CANCELTODO.addEventListener("click", (e) => {
    e.preventDefault();
    inputHandling.closeTodoDialog();
    updateEmptyState();
  });

  CLOSEVIEWTODODIALOGICON.addEventListener("click", () => {
    VIEWDIALOG.close();
    updateEmptyState();
  });

  EDITTODOBUTTON.addEventListener("click", (e) => {
    VIEWDIALOG.close();
    EDITTODODIALOG.showModal();
    const tid = Number(e.target.dataset.tid);
    const todo = logic.findTodoByTid(tid);
    inputHandling.openEditForm(todo);
    updateEmptyState();
  });

  TODOEDITFORM.addEventListener("submit", (e) => {
    console.log("hhhhhhhhhhh");
    const tid = Number(e.target.dataset.tid);
    const todo = logic.findTodoByTid(tid);
    inputHandling.updateTodo(todo);
    if (MAINHEADER.textContent === "All Task") {
      dom.displayAllTodos();
    } else {
      logic.addTodoToDefaultProject;
      const pid = logic.identifyProject(tid);
      dom.displayTodoOfClickedProject(pid);
    }
  });
  CLOSEEDITFORMBUTTON.addEventListener("click", () => {
    EDITTODODIALOG.close();
  });
};

export { listenersToTodo };
