// const firstName = "Ammar Hariz";
// const lastName = "Amirul Anwar";

// const greeting = `Hello, my full name is ${firstName} bin ${lastName}`;

// console.log(greeting);

// const animals = ["cat", "dog ", "rabbit", "panda", "owl"];

// for (let i = 0; i < animals.length; i++) {
//   const sentence = `The animals at index ${i} is ${animals[i]}`;
//   console.log(sentence);
// }

const m=require("./math.js");
const t = require("./time.js");

console.log(t.time);
console.log(t.hours);
console.log(t.minutes);
console.log(t.seconds);
console.log(t.day);
console.log(t.month);

const a = m.add(10, 2);
const b = m.subtract(0, 2);
const c = m.multiply(2, 5);

console.log(a);
console.log(b);
console.log(c);
