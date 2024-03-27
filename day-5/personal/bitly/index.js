import express from "express";
import Home from "./controller/home.js";
import Dasboard from "./controller/dashboard.js";
import GenerateShortUrl from "./controller/generateShortUrl.js";
import Redirect from "./controller/directShortUrl.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", Home);
app.post("/shorten", GenerateShortUrl);
app.get("/dashboard", Dasboard);
app.get("/:shortUrl", Redirect);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
