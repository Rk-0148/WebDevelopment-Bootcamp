import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome, this is my first Express Server</h1>");
  // console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
  res.send("<h1>My name is Rohan Kadam.</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My Contact: 8485086594</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
