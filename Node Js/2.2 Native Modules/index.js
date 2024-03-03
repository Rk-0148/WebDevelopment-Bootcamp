const fs = require("fs");
// fs.writeFile("message.txt", "Hello my name is rohan", (err) => {
//   if (err) throw err;
//   console.log("file has been saved successfully");
// });

fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
