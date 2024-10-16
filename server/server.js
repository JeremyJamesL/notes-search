import { readdir } from "node:fs/promises";
import fs from "fs";
import express from "express";
import cors from "cors";
const port = 3001;
const app = express();

app.use(cors());

app.get("/notes/all-notes", async (req, res) => {
  const newObj = {};
  const notesDir = "./notes";

  const files = await readdir(notesDir, { recursive: true });

  files.forEach((file) => {
    const count = (file.match(/\//g) || []).length;

    if (count === 0) {
      newObj[file] = {};
    } else if (count === 1) {
      const splitArr = file.split("/");
      newObj[splitArr[0]][splitArr[1]] = [];
    } else {
      const splitArr = file.split("/");
      newObj[splitArr[0]][splitArr[1]].push(splitArr[2]);
    }
  });

  res.status(200).send(newObj);
});

app.get("/notes/get-note", async (req, res) => {
  const filePath = `./notes/${req.query.note}`;
  console.log(filePath);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    res.status(200).send({ message: "ok", content: data });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
