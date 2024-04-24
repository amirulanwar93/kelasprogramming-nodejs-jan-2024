import express from "express";
import "dotenv/config";
import publicRouter from "./routes/index.js";
import privateRouter from "./routes/admin.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", publicRouter);
app.use("/admin", privateRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
