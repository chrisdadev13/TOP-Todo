import currentDate from './Today';
import Task from './Todo';
import testingNav from './Nav';

export default class Main{
  static Page(){
    Main.showDateDOM();
    Main.addTask();
    testingNav();
  }

  static showDateDOM(){ //Create and show the current date in the DOM
    const dateContainer = document.querySelector('.date-container');
    let hoy = currentDate() //hoy is an object, with current (date, day, month and year) as attributes;
    dateContainer.innerHTML = `${hoy.day}, ${hoy.date} of ${hoy.month}`;
  }

  static showInputCharacteristics(){
    const titleInput = document.querySelector("#todo-title-input");
    
    //Data and information to show
    let dateInput = document.querySelector("#date-input");
    let priorityInput = document.querySelector("#priority-input");
    titleInput.addEventListener("click", () => {
      dateInput.style.display = "";
      priorityInput.style.display = "";
    })
  }

  //Get task data:
  static getTitle(){
    const input = document.querySelector("#todo-title-input");
    const title = input.value;
    return title;
  }

  static getPriority(){
    const input = document.querySelector("#priority-input");
    const priority = input.value;
    return priority;
  }

  static priorityLevel(level){
    if(level == "Low"){
      return "green";
    }
    else if(level == "Mid"){
      return "orange";
    }
    else if(level == "High"){
      return "red";
    }
  }

  static getDate(){
    const input = document.querySelector("#date-input");
    const date = input.value;
    return date;
  }

  static createTask(){
    const title = Main.getTitle();
    const priority = Main.getPriority();
    const date = Main.getDate();

    const task = new Task;
    task.setTitle(title);
    task.setPriority(priority);
    task.setDate(date);

    return task;
  }

  //Add task to the DOM:
  static addTask(){
    Main.showInputCharacteristics();
    const addButton = document.querySelector("#add-task-button");
    const container = document.querySelector("#today-container");

    const reloadTitleInput = document.querySelector("#todo-title-input");
    const reloadDateInput = document.querySelector("#date-input");

    addButton.addEventListener("click", () => {
      container.innerHTML += Main.addTaskDOM();
      reloadTitleInput.value = "";
      reloadDateInput.value = "";
      Main.removeTask();
    });
  }

  static addTaskDOM(){
    const todo = Main.createTask();
    const taskDOM = 
      `<div class="today-todo todo-container" name="${todo.title}">
          <input class="task-status" type="checkbox" name="${todo.title}">
          <label class="todo-title">${todo.title}</label>
          <label class="todo-priority" style="color: ${Main.priorityLevel(todo.priority)}">${todo.priority}</label>
          <input class="deadline" type="date" value="${todo.date}">
          <span class="checked-line"></span>
        </div>`
    return taskDOM;
  }

  //Remove a task of the DOM:
  static removeTask(){
    const checkbox = document.querySelectorAll(".task-status");
    let todos = document.querySelectorAll("form > div.todo-container");

    checkbox.forEach((check) => {
      check.addEventListener("click", () => {
        todos.forEach((todo) => {
          if(check.getAttribute("name") == todo.getAttribute("name")){
            todo.remove();
          }
        })
      })
    })
  }
}
