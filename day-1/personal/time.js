const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const day = time.getDay();
const month = time.getMonth();

// console.log(time, "time");
// console.log(hours, "hours");
// console.log(minutes, "minutes");
// console.log(seconds, "seconds");
// console.log(day, "day");
// console.log(month, "month");

// const objects = {
//   time: time,
//   hours: hours,
//   minutes: minutes,
//   seconds: seconds,
//   day: day,
//   month: month,
// }
// XXX: XXX kalau 2 2 sama, boleh tulis mcm bawah

const objects = {
  time,
  hours,
  minutes,
  seconds,
  day,
  month,
};

// module.exports boleh export 1 sahaja
module.exports = objects;
