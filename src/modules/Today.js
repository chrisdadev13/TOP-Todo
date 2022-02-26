const fns = require('date-fns')

class Today{
  constructor(date, day, year, month){
    this.date = date;
    this.say = day;
    this.year = year;
    this.month = month;
  }
  setDate(date){
    this.date = fns.format(new Date, 'dd');
    return this;
  }
  setDay(day){
    this.day = fns.format(new Date, 'eeee');
    return this;
  }
  setYear(year){
    this.year = fns.format(new Date, 'yyyy');
    return this;
  }
  setMonth(month){
    this.month = fns.format(new Date, 'MMMM');
    return this;
  }
}

export default function currentDate(){
 let current = new Date();

 const hoy = new Today();
  hoy.setDate(current);
  hoy.setDay(current);
  hoy.setYear(current);
  hoy.setMonth(current);

  return hoy;
}
