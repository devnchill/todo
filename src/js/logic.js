import { Project } from "./project.js";
import * as Todos from "./demotodos.js";

const logic = (function () {
  const defaultProject = new Project("Default Project", [Todos.todo1]);
  const personal = new Project("Project", [Todos.todo2, Todos.todo3]);
  const odin = new Project("Odin", [Todos.todo4, Todos.todo5]);

  const allProjects = [defaultProject, personal, odin];

  function createNewProject(name) {
    const createdProject = new Project(name);
    allProjects.push(createdProject);
  }

  function addTodoToDefaultProject(todo) {
    defaultProject.todos.push(todo);
  }

  function addTodoToNewProject(pid, todo) {
    const project = allProjects.find((item) => item.pid === pid);
    if (project) {
      project.todos.push(todo);
    } else {
      console.log("Project not found");
    }
  }

  function deleteTodo(tid) {
    console.log("Running deleteTodo function");
    allProjects.forEach((project) => {
      project.todos.forEach((todo, index) => {
        if (todo.tid === tid) {
          project.todos.splice(index, 1);
        }
      });
    });
  }

  function deleteProject(pid) {
    const projectIndex = allProjects.findIndex((item) => item.pid === pid);
    if (projectIndex !== -1) {
      allProjects.splice(projectIndex, 1);
    } else {
      console.log("Project not found");
    }
  }

  function identifyProject(tid) {
    console.log("Looking for tid:", tid);
    for (const project of allProjects) {
      console.log(project);
      for (const todo of project.todos) {
        console.log(project.name);
        console.log("COMPARING todo.tid:", todo.tid, "with tid:", Number(tid));
        if (todo.tid === tid) {
          console.log(project, "projectname");
          return project.pid;
        }
      }
    }
    console.log("identifyingproject done");
    return null;
  }

  return {
    createNewProject,
    addTodoToDefaultProject,
    addTodoToNewProject,
    allProjects,
    deleteTodo,
    deleteProject,
    identifyProject,
  };
})();

export { logic };
