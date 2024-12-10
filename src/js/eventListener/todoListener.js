import { logic } from "../logic";

const listenersToTodo = () => {
  const TODOLIST = document.getElementById("__todo_list");

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
};

export { listenersToTodo };
