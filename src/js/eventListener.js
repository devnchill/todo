import { dom } from "./dom";
import { project } from "./projects";
const attachEventListenersToProjects = () => {
  const allProjectElements = document.querySelectorAll(".individualProject");
  const showAllTodoBtn = document.querySelector("#all-todos");
  const deleteSpecificProjectButton =
    document.querySelectorAll("#project-remove");
  const allRemoveTodoBtn = document.querySelectorAll(".todo-remove-btn");
  const removeTodoFromSpecificProject = document.querySelectorAll(
    ".specific-remove-btn",
  );

  removeTodoFromSpecificProject.forEach((item) => {
    item.addEventListener("click", (e) => {
      let tid = Number(e.currentTarget.parentElement.id);
      console.log("tid from DOM ->", tid, typeof tid);
      const pid = project.identifyProject(tid);
      console.log("Projetc pid -> ", pid);
      project.deleteTodo(tid);
      attachEventListenersToProjects();
      dom.displayTodoOfClickedProject(pid);
    });
  });

  allProjectElements.forEach((item) => {
    item.addEventListener("click", (e) => {
      dom.displayTodoOfClickedProject(e.currentTarget.id);
      attachEventListenersToProjects();
    });
  });

  //showAllTodoBtn.addEventListener("click", dom.displayAllTodos);
  showAllTodoBtn.addEventListener("click", () => {
    dom.displayAllTodos();
    attachEventListenersToProjects();
  });

  deleteSpecificProjectButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      let pid = e.target.parentElement.id;
      pid = Number(pid);
      project.deleteProject(pid);
      dom.displayAllProjects();
      attachEventListenersToProjects();
    });
  });

  allRemoveTodoBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let tid = Number(e.target.parentElement.id);
      console.log(tid);
      project.deleteTodo(tid);
      dom.displayAllTodos();
      attachEventListenersToProjects();
    });
  });
};
export { attachEventListenersToProjects };
