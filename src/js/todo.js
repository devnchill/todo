class Todo {
  static todoCounter = 0;
  constructor(title, description, dueDate, priority, notes) {
    this.tid = Todo.todoCounter++;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = false;
  }

  get newPriority() {
    return this.priority;
  }

  set newPriority(param) {
    this.priority = param;
  }

  toggleComplete() {
    this.checklist = !this.checklist;
  }
}

export { Todo };
