// const { generate } = require("random-words");

import { generate } from "random-words";

// console.log(generate(100));

console.log(generate({ exactly: 5, minLength: 5, maxLength: 5 }));
