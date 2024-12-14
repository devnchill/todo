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
    if (
      e.target.classList.contains("project") ||
      e.target.classList.contains("project-title")
    ) {
      const pid = Number(e.target.dataset.pid);
      const project = logic.findProjectFromPid(pid);
      MAINHEADER.textContent = project.name;
      dom.displayTodoOfClickedProject(pid);
    } else if (e.target.closest(".project-remove-btn")) {
      const pid = Number(e.target.closest(".project-remove-btn").dataset.pid);
      const allProjects = logic.deleteProject(pid);
      console.log(
        "project is deleted by calling deleteProject function from logic.deleteProject so value of allProjects is ",
        allProjects,
      );
      dom.displayAllProjects();
      console.log("allProjects are displayed so now value is ", allProjects);
      dom.displayAllTodos();
    }
  });

  ADDPROJECT.addEventListener("click", () => {
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
