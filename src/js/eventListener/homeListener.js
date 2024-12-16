import { dom } from "../dom";
import { updateEmptyState } from "../themeSwitch";

const listenersToHome = () => {
  const SECTION1 = document.getElementById("__section_1");

  SECTION1.addEventListener("click", (e) => {
    const targetClass = e.target.closest(".section1-flex");
    if (targetClass && targetClass.id === "__all_tasks") {
      dom.displayAllTodos();
    } else if (targetClass && targetClass.id === "__today") {
      dom.displayTodaysTodo();
    } else if (targetClass && targetClass.id === "__next_7_days") {
      dom.displayWeeksTodo();
    } else if (targetClass && targetClass.id === "__important") {
      dom.displayImportantTodos();
    }
      updateEmptyState();
  });
};
export { listenersToHome };
