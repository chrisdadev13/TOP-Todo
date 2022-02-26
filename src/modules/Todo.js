export default class Task{
  constructor(title, priority, date, check = false){
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.check = check;
  }

  setTitle(title){
    this.title = title;
    return this;
  }

  setPriority(priority){
    this.priority = priority;
    return this;
  }

  setDate(date){
    this.date = date;
    return this;
  }

  updateCheck(change){
    if(change == true){
      this.check = true;
      return this;
    }
  }
}
