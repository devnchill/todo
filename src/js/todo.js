class Todo {
  static todoCounter = 0;
  constructor(title, dueDate, description, priority, notes) {
    this.tid = Todo.todoCounter++;
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.notes = notes;
    this.checklist = false;
  }

  renameTitle = (param) => {
    this.title = param;
  };

  toggleComplete() {
    this.checklist = !this.checklist;
  }
}

export { Todo };
