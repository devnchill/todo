import { Todo } from "./todo.js";
const todo1 = new Todo(
  "0",
  "Hw",
  "do physics homework",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const todo2 = new Todo(
  "1",
  "Cw",
  "do maths homework",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const project = (function () {
  const defaultProject = {
    name: "Default Project",
    pid: 0,
    todos: [todo1, todo2],
  };
  const allProjects = [defaultProject];

  function createNewProject(name, pid) {
    const createdProject = { name: name, pid: pid, todos: [] };
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

  return {
    createNewProject,
    addTodoToDefaultProject,
    addTodoToNewProject,
    allProjects,
  };
})();
