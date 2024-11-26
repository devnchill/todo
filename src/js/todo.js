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

  get toggleComplete() {
    this.checklist;
  }
  set toggleComplete(checklist) {
    this.checklist = !checklist;
  }
}
export { Todo };
