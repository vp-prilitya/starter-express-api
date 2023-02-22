import express from "express";
import bodyParser from "body-parser";
import { readFileSync, writeFileSync } from "fs";

const app = express();
const port = 3000;
const dataB = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const data = readFileSync("./data.json");
  res.send(dataB);
});

app.post("/posts", (req, res) => {
  dataB.push(req.body);
  res.status(201).send({ status: "OK", data: req.body });
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
