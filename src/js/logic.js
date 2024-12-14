import { Project } from "./project.js";
import { Todo } from "./todo.js";
import * as Todos from "./demoTodos.js";
import { format, isWithinInterval, parse } from "date-fns";

const logic = (function () {
  const defaultProject = new Project("Default Project", [
    Todos.todo6,
    Todos.todo7,
  ]);
  const school = new Project("School", [Todos.todo1, Todos.todo2, Todos.todo3]);
  const odin = new Project("Odin", [Todos.todo4, Todos.todo5]);

  let allProjects = [];
  const getAllProjects = () => allProjects;
  const preDefinedProjects = [defaultProject, school, odin];

  function syncStorage(action = "save") {
    if (action === "load") {
      console.log("Loading from localStorage...");

      const storedProjects = JSON.parse(localStorage.getItem("allProjects"));
      if (storedProjects) {
        console.log("Found stored projects:", storedProjects);
        allProjects = storedProjects.map((project) => {
          const todos = project.todos.map((todo) =>
            Object.assign(new Todo(), todo),
          );
          return Object.assign(new Project(), project, { todos });
        });
        console.log("Loaded projects into allProjects:", allProjects);
      } else {
        console.log("No stored projects found, using predefined projects.");
        allProjects = preDefinedProjects;
        syncStorage("save");
      }
    } else if (action === "save") {
      console.log("Saving projects to localStorage:", allProjects);
      localStorage.setItem("allProjects", JSON.stringify(allProjects));
    }
  }
  syncStorage("load");

  const getAllTodos = () => allProjects.flatMap((project) => project.todos);

  const findProjectFromPid = (pid) =>
    allProjects.find((project) => project.pid === pid);

  const findTodoByTid = (tid) =>
    getAllTodos().find((todo) => todo.tid === tid) || null;

  function createNewProject(name) {
    const createdProject = new Project(name);
    allProjects.push(createdProject);
    syncStorage("save");
  }

  function addTodoToDefaultProject(todo) {
    defaultProject.todos.push(todo);
    syncStorage("save");
  }

  function addTodoToNewProject(pid, todo) {
    const project = findProjectFromPid(pid);
    if (project) {
      project.todos.push(todo);
      syncStorage("save");
    } else {
      console.error("Project not found");
    }
  }

  function deleteTodo(tid) {
    allProjects.forEach((project) => {
      project.todos = project.todos.filter((todo) => todo.tid !== tid);
      syncStorage("save");
    });
  }

  function deleteProject(pid) {
    console.log("Before deletion:", allProjects);

    allProjects = allProjects.filter((project) => project.pid !== pid);
    console.log("After deletion:", allProjects);
    syncStorage("save");
    console.log(allProjects);
    console.log(logic.allProjects);
  }

  function identifyProject(tid) {
    for (const project of allProjects) {
      if (project.todos.some((todo) => todo.tid === tid)) {
        return project.pid;
      }
    }
    return null;
  }

  const findTodaysTodos = () => {
    const todayFormatted = format(new Date(), "do MMMM, yyyy");
    return getAllTodos().filter((todo) => todo.dueDate === todayFormatted);
  };

  const findThisWeeksTodos = () => {
    const today = new Date();
    const sevenDaysLater = new Date(today);
    sevenDaysLater.setDate(today.getDate() + 7);

    return getAllTodos().filter((todo) => {
      const dueDate = parse(todo.dueDate, "do MMMM, yyyy", new Date());
      return isWithinInterval(dueDate, { start: today, end: sevenDaysLater });
    });
  };

  const findImportantTodos = () =>
    getAllTodos().filter((todo) => todo.important === true);

  return {
    syncStorage,
    getAllProjects,
    findImportantTodos,
    findThisWeeksTodos,
    findProjectFromPid,
    createNewProject,
    addTodoToDefaultProject,
    addTodoToNewProject,
    deleteTodo,
    deleteProject,
    identifyProject,
    findTodoByTid,
    findTodaysTodos,
  };
})();

export { logic };
