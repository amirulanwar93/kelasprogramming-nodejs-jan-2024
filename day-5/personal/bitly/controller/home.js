import fs from "fs";
import path from "path";

function Home(req, res) {
  const filePath = path.join(process.cwd(), "pages", "index.html");
  const page = fs.readFileSync(filePath, "utf8");
  res.send(page);
}

export default Home;
