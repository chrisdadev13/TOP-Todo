import currentDate from './Today';
import Task from './Todo';
import Project from './Project';
import Nav from './Nav';

export default class Main{
  static Page(){
    Main.showDateDOM();
    Main.addTask();
    Main.addProject();
    Nav();
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
    let directionInput = document.querySelector("#direction-input");

    titleInput.addEventListener("click", () => {
      dateInput.style.display = "";
      priorityInput.style.display = "";
      directionInput.style.display = "";
    })
  }

  //Get project data:
  static getProjectTitle(){
    const input = document.querySelector(".project-title-input");
    const title = input.value;
    return title;
  }

  static createProject(){
    const title = Main.getProjectTitle();
    const newProject = new Project();
    newProject.setTitle(title);

    return newProject;
  }

  static addProjectNavDOM(){
    const project = Main.createProject();

    const li = document.createElement("li");
    li.className = "nav-item";
    li.setAttribute("id", project.title);

    const a = document.createElement("a");
    a.className = "nav-link";

    const i = document.createElement("i");
    i.className = "bi bi-list";

    const p = document.createElement("p");
    p.className = "nav-text";
    p.textContent = project.title;

    a.appendChild(i);
    a.appendChild(p);

    li.appendChild(a);

    return li;
  }

  static addProjectContent(){
    const project = Main.createProject();

    const projectContent = document.createElement("div");
    projectContent.className = `content-${project.title}`;
    projectContent.classList.add("section");
    projectContent.setAttribute("id", project.title);

    const projectTodo = document.createElement("form");
    projectTodo.className = "today-todos";
    projectTodo.setAttribute("id", `${project.title}-container`);

    projectContent.appendChild(projectTodo);

    return projectContent;
  }

  static addProjectDirection(){
    const project = Main.createProject();

    const projectDirection = document.createElement("option");
    projectDirection.setAttribute("value", project.title);
    projectDirection.textContent = project.title;

    return projectDirection;
  }

  static addProject(){
    const container = document.querySelector("ul.navbar-nav");
    const content = document.querySelector(".content");
    const directionContainer = document.querySelector("#direction-input");
    const addButton = document.querySelector("#add-project-button");

    addButton.addEventListener("click", () => {
      container.appendChild(Main.addProjectNavDOM());
      content.appendChild(Main.addProjectContent());
      directionContainer.appendChild(Main.addProjectDirection());
      Nav();
      const reloadInput = document.querySelector(".project-title-input");
      reloadInput.value = "";
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

  static getDirection(){
    const input = document.querySelector("#direction-input");
    const direction = input.value;
    
    return direction;
  }

  static createTask(){
    const title = Main.getTitle();
    const priority = Main.getPriority();
    const date = Main.getDate();
    const direction = Main.getDirection();

    const task = new Task;
    task.setTitle(title);
    task.setPriority(priority);
    task.setDate(date);
    task.setDirection(direction)

    return task;
  }

  //Add task to the DOM:
  static addTask(){
    Main.showInputCharacteristics();

    const addButton = document.querySelector("#add-task-button");

    const reloadTitleInput = document.querySelector("#todo-title-input");
    const reloadDateInput = document.querySelector("#date-input");

    addButton.addEventListener("click", () => {
      let container = document.querySelector(`#${Main.getDirection()}-container`);
      container.innerHTML += Main.addTaskDOM();
      reloadTitleInput.value = "";
      reloadDateInput.value = "";
      Main.removeTask();
      console.log(container);
      console.log(Main.getDirection());
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
