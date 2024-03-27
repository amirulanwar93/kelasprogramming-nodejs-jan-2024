import fs from "fs";
import path from "path";

function Redirect(req, res) {
  const shortUrl = req.params.shortUrl;

  const dataFilePath = path.join(process.cwd(), "model", "links.json");
  const fileStringData = fs.readFileSync(dataFilePath, { encoding: "utf-8" });
  const fileData = JSON.parse(fileStringData);

  const link = fileData.find((link) => link.shortUrl === shortUrl);

  const longUrl = link.url;

  if (longUrl.startsWith("http://")) {
    res.status(301).redirect(longUrl);
  } else {
    res.status(301).redirect("http://" + longUrl);
  }
}

export default Redirect;
