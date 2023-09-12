class Project {
  constructor(project) {
    this.project = [];
  }

  createProject() {
    return this.project;
  }
}

const projectOne = new Project();

console.log(projectOne.createProject());

class ToDo {
  constructor(title, details, dueDate, priority) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  hello() {
    console.log(this.title);
  }
}

const myTest = new ToDo("wash windows", "downstairs", "12/4", "high");
function newToDo() {
  console.log(new ToDo(1, 2, 3, 4));
}

newToDo();
newToDo();
newToDo();
newToDo();
newToDo();
newToDo();
newToDo();
newToDo();
