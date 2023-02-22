import express from "express";
import bodyParser from "body-parser";
import { readFileSync, writeFileSync } from "fs";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const data = readFileSync("./data.json");
  res.send(JSON.parse(data));
});

app.post("/posts", (req, res) => {
  const path = "./data.json";
  const data = readFileSync(path);
  const jsonData = JSON.parse(data);
  jsonData.push(req.body);

  try {
    writeFileSync(path, JSON.stringify(jsonData), "utf8");
    res.status(201).send({ status: "OK", data: req.body });
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
