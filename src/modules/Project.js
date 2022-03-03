export default class Project{
  constructor(title, tasks = []){
    this.title = title;
    this.tasks = tasks;
  }

  setTitle(title){
    this.title = title;
    return this;
  }

  addTasks(task){
    this.tasks.push(task);
    return this;
  }
}
