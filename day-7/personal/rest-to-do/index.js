import express from "express";
import healthController from "./controller/health.js";
import notFound from "./controller/not-found.js";
import { databaseInit } from "./database/connection.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseInit();

app.get("/", healthController.get);
app.post("/", healthController.post);

app.use(notFound);

app.listen(PORT, function () {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
