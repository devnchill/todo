import { dom } from "../dom";
import { logic } from "../logic";

const listenersToHome = () => {
  const SECTION1 = document.getElementById("__section_1");
  const MAINHEADER = document.getElementById("__main_header");

  SECTION1.addEventListener("click", (e) => {
    const targetClass = e.target.closest(".section1-flex");
    if (targetClass && targetClass.id === "__all_tasks") {
      MAINHEADER.textContent = "All Task";
      dom.displayAllTodos();
    } else if (targetClass && targetClass.id === "__today") {
      MAINHEADER.textContent = "Today's ToDo";
      dom.displayTodaysTodo();
    } else if (targetClass && targetClass.id === "__next_7_days") {
      MAINHEADER.textContent = "Weeks Todo";
      dom.displayWeeksTodo();
    } else if (targetClass && targetClass.id === "__important") {
      MAINHEADER.textContent = "Important Todos";
      dom.displayImportantTodos();
    }
  });
};
export { listenersToHome };
