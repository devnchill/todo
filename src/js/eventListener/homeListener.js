import { dom } from "../dom";

const listenersToHome = () => {
  const SECTION1 = document.getElementById("__section_1");

  SECTION1.addEventListener("click", (e) => {
    const targetClass = e.target.closest(".section1-flex");
    if (targetClass) {
      const allSection1FlexElements =
        SECTION1.querySelectorAll(".section1-flex");
      allSection1FlexElements.forEach((item) =>
        item.classList.remove("active"),
      );
      targetClass.classList.add("active");

      if (targetClass.id === "__all_tasks") {
        dom.displayAllTodos();
      } else if (targetClass.id === "__today") {
        dom.displayTodaysTodo();
      } else if (targetClass.id === "__next_7_days") {
        dom.displayWeeksTodo();
      } else if (targetClass.id === "__important") {
        dom.displayImportantTodos();
      }
    }
  });
};

export { listenersToHome };
