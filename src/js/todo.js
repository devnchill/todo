class Todo {
  constructor(tid, title, description, dueDate, priority, notes) {
    this.tid = tid;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = false;
  }

  get changePriority() {
    return this.priority;
  }

  set changePriority(param) {
    this.priority = param;
  }

  toggleComplete() {
    this.checklist = !this.checklist;
  }
}
export { Todo };
