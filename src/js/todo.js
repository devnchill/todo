class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  get toggleChecklist() {
    this.toggleChecklist;
  }
  set toggleChecklist(checklist) {
    this.toggleChecklist = !this.toggleChecklist;
  }
}
export { Todo };
