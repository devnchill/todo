import { project } from "./projects";
import { createCustomElement } from "./helperfunction";

const Main = document.querySelector("main");
const dom = (function () {
  const dispalyAllProjects = () => {
    const allProject = project.allProjects;
    allProject.forEach((item) => {
      const todoContainer = createCustomElement("div", item.pid, item.name);
      Main.appendChild(todoContainer);
    });
  };
  return { dispalyAllProjects };
})();
export { dom};
