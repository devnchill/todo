import { Todo } from "./todo";
import { format } from "date-fns";

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
