import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("April 22, 2023");
  const day = today.getDay();
  console.log(day);
  ("");
  let type = "a Weekday";
  let adv = "Its time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "Its time to relax";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
