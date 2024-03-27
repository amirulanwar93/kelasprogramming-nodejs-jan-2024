const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 8989;

app.use(express.static("public"));

app.get("/", function (req, res) {
  const homePagePath = path.join(__dirname, "pages", "index.html");
  const homePage = fs.readFileSync(homePagePath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(homePage);
});

app.get("/bmi-form", function (req, res) {
  const bmiFormPath = path.join(__dirname, "pages", "bmi-form.html");
  const bmiForm = fs.readFileSync(bmiFormPath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(bmiForm);
});

app.get("/bmi-result", function (req, res) {
  const bmiResultPath = path.join(__dirname, "pages", "bmi-result.html");
  const bmiResult = fs.readFileSync(bmiResultPath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(bmiResult);
});

app.post("/calculate", function (req, res) {
  res.redirect("/bmi-result");
});

app.use(function (req, res) {
  const notFoundPath = path.join(__dirname, "pages", "404.html");
  const notFound = fs.readFileSync(notFoundPath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(404).send(notFound);
});

app.listen(PORT, function () {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
