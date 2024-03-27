const http = require("http");
const fs = require("fs");
const path = require("path");

const indexHtmlPath = path.join(__dirname, "pages", "index.html");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");
const projectsHtmlPath = path.join(__dirname, "pages", "projects.html");
const projectsHtml = fs.readFileSync(projectsHtmlPath, "utf8");
const notFoundHtmlPath = path.join(__dirname, "pages", "404.html");
const notFoundHtml = fs.readFileSync(notFoundHtmlPath, "utf8");

const cssPath = path.join(__dirname, "public", "style.css");
const css = fs.readFileSync(cssPath, "utf8");

const scriptPath = path.join(__dirname, "public", "script.js");
const script = fs.readFileSync(scriptPath, "utf8");

let indexHtml2;
fs.readFile(indexHtmlPath, "utf8", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    indexHtml2 = data;
  }
});

// monitor visitor count

let visitorCount = 0;

const server = http.createServer((req, res) => {
  const url = req.url.toLowerCase();

  if (url === "/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(css);
    res.end();
    return;
  }

  if (url === "/script.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(script);
    res.end();
    return;
  }

  // if (url === "/") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write(indexHtml);
  //   res.end();
  //   return;
  // }

  // if (url === "/project") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write(projectsHtml);
  //   res.end();
  //   return;
  // }

  // res.writeHead(404, { "Content-Type": "text/html" });
  // res.write(notFoundHtml);
  // res.end();

  switch (url) {
    case "/":
      visitorCount++;
      console.log("Visitor count: ", visitorCount);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(indexHtml);
      res.end();
      break;

    case "/project":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(projectsHtml);
      res.end();
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(notFoundHtml);
      res.end();
  }
});

server.listen((port = 2626), function () {
  const myUrl = "http://localhost:" + port;
  console.log(`Website server is running on port ${myUrl}`);
});
