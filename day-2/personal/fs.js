const fs = require("fs");
const cripto = require("crypto");

const randomInt = cripto.randomInt(0, 10000);

fs.mkdir(`./fs-files/${randomInt}/`, { recursive: true }, (err) => {
  if (err) {
    console.log("directory not created");
  } else {
    console.log("directory created");
  }
})

fs.writeFile(
  `./fs-files/${randomInt}/message-${randomInt}.txt`,
  `Hello Node.js with random number ${randomInt}`,
  "utf8",
  function (err) {
    if (err) {
      console.log("file not written");
    } else {
      console.log(`file written`);
    }
  }
);

fs.readFile(
  `./fs-files/${randomInt}/message-${randomInt}.txt`,
  "utf8",
  function (err, data) {
    if (err) {
      console.log("file not found");
    } else {
      console.log(`file found`);
      console.log(data);
    }
  }
);
