const inquirer = require("inquirer");

const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
      type: "input",
      name: "unique",
      message: "What makes your project unique and stand out?",
    },
    {
      type: "input",
      name: "portfolio",
      message: "What is your portfolio URL?",
    },
    {
      type: "input",
      name: "motivation",
      message: "What was your motivation for this project?",
    },
    {
      type: "input",
      name: "problemSolve",
      message: "What problem does your project solve?",
    },
    {
      type: "checkbox",
      name: "learning",
      message: "What languages did you use?",
      choices: ["HTML", "CSS", "JavaScript", "C++", "jQuery", "Node.js"],
    },
    {
      type: "list",
      name: "license",
      message: "What license was used for this project?",
      choices: ["MIT", "GNU"],
    },
  ])

  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    fs.writeFile("index.html");
    //  fs.writeFile("autoIndex.html", JSON.stringify(answers), () => {});
  });
// const HTMLTemplate = { name, title, project, bio, gitHub, linkedin, age };
function createFile(userInfo, fileName) {}
//   fs.writeFile(fileName, JSON.stringify(answers), () => {});
// }
