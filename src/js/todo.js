class Todo {
  static todoCounter = 0;
  constructor(title, dueDate, description, priority) {
    this.tid = Todo.todoCounter++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = false;
    this.important = false;
  }

  renameTitle = (param) => {
    this.title = param;
  };

  toggleComplete() {
    this.checklist = !this.checklist;
  }

  toggleImportant() {
    this.important = !this.important;
  }
}

export { Todo };

