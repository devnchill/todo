class Project {
  //will act like an id , will be shared across all instances and will be unique , increament by 1 everytime new instance is created
  static projectCounter = 0;
  constructor(name, todos = []) {
    this.name = name;
    this.pid = Project.projectCounter++;
    this.todos = todos;
  }

  newName = (name) => {
    this.name = name;
  };
}
export { Project };
