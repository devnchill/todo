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
    todos: [todo1, todo2, todo3],
  };
  const allProjects = [
    defaultProject,
    { name: "School", pid: projectCounter++, todos: [todo2] },
    { name: "Personal", pid: projectCounter++, todos: [todo4] },
    {
      name: "Project",
      pid: projectCounter++,
      todos: [todo2, todo4, todo1, todo3],
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

function deleteTodo(pid, tid) {
  const project = allProjects.find((project) => project.pid === pid);
  if (project) {
    const todoIndex = project.todos.findIndex((todo) => todo.tid === tid);
    if (todoIndex !== -1) {
      project.todos.splice(todoIndex, 1);
    } else {
      console.log("Todo not found");
    }
  } else {
    console.log("Project not found");
  }
}

  function deleteProject(pid) {
    const projectIndex = allProjects.findIndex((item) => item.pid === pid);
    if (projectIndex !== -1) {
      allProjects.splice(projectIndex, 1);
    } else {
      console.log("Project not found");
    }
  }

  return {
    createNewProject,
    addTodoToDefaultProject,
    addTodoToNewProject,
    allProjects,
    deleteTodo,
    deleteProject,
  };
})();

export { project };
