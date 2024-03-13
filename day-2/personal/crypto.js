// const crypto = require("crypto");
const crypto = require("node:crypto");

const randomInt = crypto.randomInt(1000);
const randomString = crypto.randomBytes(10);

// uuid - Universally Unique Identifier
const uuid = crypto.randomUUID();
const name = "anwar";

console.log(randomInt);
console.log(randomString.toString("hex"));
console.log(uuid);

const nameWithId = name + "-" + randomInt;
console.log(nameWithId);
