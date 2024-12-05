import { Todo } from "./todo";

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
    console.log(
      "This is original form object :",
      Object.fromEntries(formData.entries()),
    );
    const { title, date, description, priority, notes } = Object.fromEntries(
      formData.entries(),
    );
    const todo = new Todo(title, date, description, priority, notes);
    console.log("This is todo :", todo);
    return todo;
  }

  return {
    openProjectDialog,
    closeProjectDialog,
    extractProjectInput,
    openTodoDialog,
    closeTodoDialog,
    extractTodoInput,
  };
})();

export { inputHandling };
