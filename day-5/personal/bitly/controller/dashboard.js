import fs from "fs";
import path from "path";

function Dasboard(req, res) {
  const filePath = path.join(process.cwd(), "pages", "dashboard.html");
  const page = fs.readFileSync(filePath, "utf8");
  res.send(page);
}

export default Dasboard;
