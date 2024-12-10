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
      console.log("TODAYYYYYYYYYYYYYYYYYY");
    }
  });
};

export { listenersToHome };
