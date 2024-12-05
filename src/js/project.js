class Project {
  static projectCounter = 0;
  constructor(name, todos = []) {
    this.name = name;
    this.pid = Project.projectCounter++;
    this.todos = todos;
  }

  rename = (name) => {
    this.name = name;
  };
}
export { Project };
