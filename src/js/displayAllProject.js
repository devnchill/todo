import { Todo } from "./todo";
import { project } from "./projects";
import { createCustomElement } from "./helperfunction";

const AllProjectBtn = document.getElementById("all-projects");
const Main = document.querySelector("main");
const dispalyAllProjects = () => {
  const allProject = project.allProjects;
  allProject.forEach((item, index) => {
    const todoContainer = createCustomElement("div", item.pid, item.name);
    Main.appendChild(todoContainer);
  });
};
export { dispalyAllProjects };
