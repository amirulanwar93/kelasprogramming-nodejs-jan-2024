import express from "express";
import healthController from "./controller/health.js";
import notFound from "./controller/not-found.js";
import { databaseInit } from "./database/connection.js";
import createUser from "./controller/user.controller/create.js";
import createToken from "./controller/auth.js";
import {
  readAllUsers,
  readUserById,
} from "./controller/user.controller/read.js";
import updateUser from "./controller/user.controller/update.js";
import deleteUser from "./controller/user.controller/delete.js";

import createTodo from "./controller/todo.controller/create.js";
import listAllTodos from "./controller/todo.controller/read.js";
import isAuth from "./middleware/isAuth.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseInit();

app.get("/", healthController.get);
app.post("/", healthController.post);
app.get("/users", readAllUsers);
app.get("/users/:id", readUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.post("/register", createUser);
app.post("/login", createToken);

app.get("/todos", isAuth, listAllTodos);
app.post("/todos",isAuth, createTodo);

app.use(notFound);

app.listen(PORT, function () {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
