class Todo {
  //will act like an id , will be shared across all instances and will be unique , increament by 1 everytime new instance is created
  static todoCounter = 0;

  constructor(title, dueDate, description, priority) {
    this.tid = Todo.todoCounter++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
    this.important = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }

  toggleImportant() {
    this.important = !this.important;
  }

  editTodo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export { Todo };
