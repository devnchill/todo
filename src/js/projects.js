import { Todo } from "./todo.js";
const todo1 = new Todo(
  "Physcis Homework",
  "I will have to do my physics homework",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const todo2 = new Todo(
  "Chemistry Homework",
  "do chemistry homework by the end of this week",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const todo3 = new Todo(
  "Maths Homework",
  "do maths homework by the end of this week",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const todo4 = new Todo(
  "building TTT ",
  "finish working on Tic Tac Toe game by this weekend",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const project = (function () {
  let projectCounter = 0;
  const defaultProject = {
    name: "Default Project",
    pid: projectCounter++,
    todos: [todo1],
  };
  const allProjects = [
    defaultProject,
    { name: "School", pid: projectCounter++, todos: [todo2] },
    {
      name: "Personal",
      pid: projectCounter++,
      todos: [todo4, todo2, todo1, todo3],
    },
    {
      name: "Project",
      pid: projectCounter++,
      todos: [todo3],
    },
  ];

  function createNewProject(name) {
    const createdProject = { name: name, pid: projectCounter++, todos: [] };
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
      for (const todo of project.todos) {
        if (todo.tid === Number(tid)) {
          return project.pid; 
        }
      }
      return null; 
    }
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

export { project };
