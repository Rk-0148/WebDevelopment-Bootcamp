//1. Use the inquirer npm package to get user input.

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { log } from "console";
inquirer
  .prompt([
    {
      message: "Please enter a URL",
      name: "URL",
    },
  ])
  //2. Use the qr-image npm package to turn the user entered URL into a QR code image.
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    console.log(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    //3. Create a txt file to save the user input using the native fs node module.

    fs.writeFile("URL.txt", url, (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
