class Todo {
  static todoCounter = 0;
  constructor(title, description, priority, notes) {
    this.tid = Todo.todoCounter++;
    this.title = title;
    this.description = description;
    //this.dueDate = dueDate;
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
