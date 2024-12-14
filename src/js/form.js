import { logic } from "./logic";
import { Todo } from "./todo";
import { format, parse } from "date-fns";

const inputHandling = (function () {
  const PROJECTFORM = document.querySelector("#__project_form");
  const PROJECTDIALOG = document.querySelector("#__project_dialog");
  const TODODIALOG = document.querySelector("#__todo_dialog");
  const TODOFORM = document.querySelector("#__todo_form");

  function openProjectDialog() {
    PROJECTDIALOG.showModal();
  }

  function closeProjectDialog() {
    PROJECTFORM.reset();
    PROJECTDIALOG.close();
  }

  function extractProjectInput() {
    const title = document.querySelector("#__project_title_form").value;
    if (title) {
      return title;
    } else {
      return "alphabetagamatheta";
    }
  }

  function openTodoDialog() {
    TODODIALOG.showModal();
  }

  function closeTodoDialog() {
    TODOFORM.reset();
    TODODIALOG.close();
  }

  function extractTodoInput() {
    const formData = new FormData(TODOFORM);
    let { title, date, description, priority } = Object.fromEntries(
      formData.entries(),
    );
    date = format(new Date(date), "do MMMM, yyyy");
    const priorityMap = {
      0: "low",
      50: "medium",
      100: "high",
    };
    priority = priorityMap[priority] || "invalid priority";
    const todo = new Todo(title, date, description, priority);
    console.log(todo);
    return todo;
  }

  function viewTodo(todo) {
    const title = document.getElementById("__todo_title_modal").children[1];
    const description = document.getElementById("__todo_description_modal")
      .children[1];
    const date = document.getElementById("__todo_date_modal").children[1];
    const priority = document.getElementById("__todo_priority_modal")
      .children[1];
    const complete = document.getElementById("__todo_complete_modal")
      .children[1];
    const important = document.getElementById("__todo_important_modal")
      .children[1];
    title.textContent = todo.title;
    description.textContent = todo.description;
    date.textContent = todo.dueDate;
    priority.textContent = todo.priority;
    complete.textContent = todo.complete;
    important.textContent = todo.important;
  }

  function openEditForm(todo) {
    const title = document.getElementById("__todo_edit_title_form");
    const description = document.getElementById("__todo_edit_description_form");
    const priority = document.getElementById("__todo_edit_priority_form");
    title.value = todo.title;
    description.value = todo.description;
    priority.value = todo.priority;
  }

  function updateTodo(todo) {
    const TODOEDITFORM = document.getElementById("__todo_edit_form");
    const formData = new FormData(TODOEDITFORM);
    let { title, date, description, priority } = Object.fromEntries(
      formData.entries(),
    );
    date = format(new Date(date), "do MMMM, yyyy");
    const priorityMap = {
      0: "low",
      50: "medium",
      100: "high",
    };
    priority = priorityMap[priority] || "invalid priority";

    todo.title = title;
    todo.dueDate = date;
    todo.description = description;
    todo.priority = priority;
    logic.syncStorage();
  }

  return {
    updateTodo,
    openEditForm,
    viewTodo,
    openProjectDialog,
    closeProjectDialog,
    extractProjectInput,
    openTodoDialog,
    closeTodoDialog,
    extractTodoInput,
  };
})();

export { inputHandling };
