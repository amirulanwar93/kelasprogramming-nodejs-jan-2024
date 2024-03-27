import crypto from "crypto";
import fs from "fs";
import path from "path";

function GenerateShortUrl(req, res) {
  const url = req.body.url;

  const randomString = crypto.randomBytes(3).toString("hex");
  const shortUrl = `${randomString}`;

  const linksFilePath = path.join(process.cwd(), "model", "links.json");

  const fileStringData = fs.readFileSync(linksFilePath, { encoding: "utf8" });
  const fileData = JSON.parse(fileStringData);

  const newData = { url, shortUrl };
  fileData.push(newData);

  const stringData = JSON.stringify(fileData, null, 2);
  fs.writeFileSync(linksFilePath, stringData);

  res.send(shortUrl);
}

export default GenerateShortUrl;
