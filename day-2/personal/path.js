const path = require("path");
const fs = require("fs");

const textPath = path.join(__dirname, "fs-files", "7999", "message-7999.txt");
const extFile = path.extname(textPath);

// console.log(__dirname);
// console.log(__filename);
console.log(textPath);

if (extFile === ".txt") {
  console.log("This is a text file");
} else {
  console.log("This is not a text file");
}

fs.readFile(textPath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
