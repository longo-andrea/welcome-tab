import { Clock } from './clock';

const clock = new Clock();

setInterval(() => {
  console.log(clock.getHour());
},1000);