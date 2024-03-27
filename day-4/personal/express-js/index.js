const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 8989;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/bmi-result", function (req, res) {
  // const bmi = req.query.bmi;

  const data = req.body;

  const weight = Number(data.weight);
  const height = Number(data.height);
  const bmi = (weight / height ** 2).toFixed(2);

  const bmiResultPath = path.join(__dirname, "pages", "bmi-result.html");
  let bmiResult = fs
    .readFileSync(bmiResultPath, "utf8")
    .replace("[[BMI-RESULT]]", bmi);

  // if (bmi) {
  //   bmiResult = bmiResult.replace("[[BMI-RESULT]]", bmi);

  if (bmi < 18.5) {
    bmiResult = bmiResult.replace("[[BMI-RANGE]]", "Underweight");
  } else if (bmi < 24.9) {
    bmiResult = bmiResult.replace("[[BMI-RANGE]]", "Normal");
  } else if (bmi < 29.9) {
    bmiResult = bmiResult.replace("[[BMI-RANGE]]", "Overweight");
  } else {
    bmiResult = bmiResult.replace("[[BMI-RANGE]]", "Obese");
  }
  // } else {
  //   bmiResult = bmiResult.replace("[[BMI-RESULT]]", "No BMI value ");
  // }

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(bmiResult);
});

// app.post("/calculate", function (req, res) {
//   const data = req.body;

//   const weight = Number(data.weight);
//   const height = Number(data.height);
//   const bmi = (weight / height ** 2).toFixed(2);

//   res.redirect("/bmi-result?bmi=" + bmi);
// });

app.use(function (req, res) {
  const notFoundPath = path.join(__dirname, "pages", "404.html");
  const notFound = fs.readFileSync(notFoundPath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(404).send(notFound);
});

app.listen(PORT, function () {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
