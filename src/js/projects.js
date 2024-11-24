import { Todo } from "./todo.js";
const todo1 = new Todo(
  "Hw",
  "do physics homework",
  "2nd septermber 2025",
  "high",
  "don't forget it you idiot",
);

const project = (function () {
  const preDefinedTodos = [];
  const projectGroup = [preDefinedTodos];

  function addPreDefinedTodos() {
    preDefinedTodos.push(todo1);
  }

  function addNewProject() {
    const newProject = [];
    projectGroup.push(newProject);
    return newProject;
  }

  function addNewTodos(todo) {
    //Add todos to slected project
  }
  return { projectGroup, addPreDefinedTodos, addNewProject, addNewTodos };
})();

console.log(project.addNewTodos());
