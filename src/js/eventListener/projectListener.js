import { dom } from "../dom";
import { logic } from "../logic";

const listenersToProject = () => {
  const MAINHEADER = document.getElementById("__main_header");
  const PROJECTLIST = document.getElementById("__project_list");
  PROJECTLIST.addEventListener("click", (e) => {
    console.log("hhhhhhhhh");
    if (
      e.target.classList.contains("project") ||
      e.target.classList.contains("project-title")
    ) {
      const pid = Number(e.target.dataset.pid);
      const project = logic.findProjectFromPid(pid);
      MAINHEADER.textContent = project.name;

      dom.displayTodoOfClickedProject(pid);
    }
  });
};

export { listenersToProject };
