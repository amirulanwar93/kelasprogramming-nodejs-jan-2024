const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url.toLocaleLowerCase();
  console.log(url);

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<div style='background-color:red'><h1>Home</h1></div>");
    res.end();
    return;
  }

  if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<div style='background-color:blue; color:white'><h1>About</h1></div>"
    );
    res.end();
    return;
  }

  if (url == "/youtube") {
    res.writeHead(301, { location: "https://www.youtube.com" });
    res.end();
    return;
  }

  if (url === "/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({ name: "Ahmad", age: 36, location: "Kuala Lumpur" })
    );
    res.end();
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(
    "<div style='background-color:yellow'><h1>404 Not Found</h1></div>"
  );

  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.write("<div style='background-color:red'><h1>Hello World</h1></div>");

  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.write(JSON.stringify({name:'John', age:30}))

  // res.writeHead(301, { location: "http://www.google.com" });

  res.end();
});

server.listen(3000);
