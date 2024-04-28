import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const lengthOfName = req.body["fName"].length + req.body["lName"].length;
  console.log(req.body["fName"]);
  console.log(req.body["lName"]);
  res.render("index.ejs", { numOfLetters: lengthOfName });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
