import { dom } from "../dom";
import { inputHandling } from "../form";
import { logic } from "../logic";

const listenersToProject = () => {
  const MAINHEADER = document.getElementById("__main_header");
  const PROJECTLIST = document.getElementById("__project_list");
  const PROJECTFORM = document.getElementById("__project_form");
  const CANCELPROJECT = document.getElementById("__project_cancel_btn_form");
  const ADDPROJECT = document.getElementById("__add_project");
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

  ADDPROJECT.addEventListener("click", (e) => {
    inputHandling.openProjectDialog();
  });
  PROJECTFORM.addEventListener("submit", (e) => {
    e.preventDefault();
    logic.createNewProject(inputHandling.extractProjectInput());
    dom.displayAllProjects();
    inputHandling.closeProjectDialog();
  });

  CANCELPROJECT.addEventListener("click", (e) => {
    e.preventDefault();
    inputHandling.closeProjectDialog();
  });
};

export { listenersToProject };
