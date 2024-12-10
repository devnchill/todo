import { dom } from "../dom";

const listenersToHome = () => {
  const SECTION1 = document.getElementById("__section_1");
  const MAINHEADER = document.getElementById("__main_header");

  SECTION1.addEventListener("click", (e) => {
    const targetClass = e.target.closest(".section1-flex");
    console.log(targetClass);
    if (targetClass && targetClass.id === "__all_tasks") {
      MAINHEADER.textContent = "All Task";
      dom.displayAllTodos();
    } else if (targetClass && targetClass.id === "__today") {
      MAINHEADER.textContent = "Today's ToDo";
      dom.displayTodaysTodo();
    } else if (targetClass && targetClass.id === "__next_7_days") {
      console.log("TODAYYYYYYYYYYYYYYYYYY");
    } else if (targetClass && targetClass.id === "__important") {
      console.log("TODAYYYYYYYYYYYYYYYYYY");
    }
  });
};
export { listenersToHome };
