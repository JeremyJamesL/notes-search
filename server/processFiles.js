import fs from "fs";
import path from "path";
import * as md2json from "@moox/markdown-to-json";
import { algoliasearch } from "algoliasearch";
const notesDir = "./notes";

const files = fs.readdirSync(notesDir, { recursive: true });
const client = algoliasearch("YSWWVAX5RB", "5b56c1d87d54fd65faec0642712a1f46");
const objectsArr = [];

const processFiles = () => {
  files.forEach((file) => {
    if (path.extname(file) == ".md") {
      const data = fs.readFileSync(`./notes/${file}`, "utf-8");
      const mdJSON = md2json.markdownAsJsTree(data);
      const headings = mdJSON.headings.map((el) => {
        return el.text;
      });
      const splitFileName = file.split("/");
      const tempCategory = `${splitFileName[0]} / ${splitFileName[1]} / ${splitFileName[2]}`;
      const category = tempCategory.replace(/\d+|\.md|\.|/g, "");
      const title = headings[0];
      const newObj = {
        objectID: file,
        title,
        headings,
        category,
      };
      objectsArr.push(newObj);
    }
  });
  console.log(objectsArr);
};

const sendToAlgolia = async () => {
  objectsArr.forEach(async (el) => {
    const response = await client.saveObject({
      indexName: "coding_notes",
      body: el,
    });
    console.log("The following objects were updated:", response);
  });
};

processFiles();
sendToAlgolia();
