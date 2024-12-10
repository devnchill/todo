class Todo {
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

  renameTitle = (param) => {
    this.title = param;
  };

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
  getPriorityClass() {
    if (this.priority === "high") return "priority-high";
    if (this.priority === "medium") return "priority-medium";
    if (this.priority === "low") return "priority-low";
    return "";
  }
  updatePriorityClass(todoElement) {
    todoElement.classList.remove(
      "priority-high",
      "priority-medium",
      "priority-low",
    );

    const priorityClass = this.getPriorityClass();
    if (priorityClass) {
      todoElement.classList.add(priorityClass);
    }
  }
}

export { Todo };
