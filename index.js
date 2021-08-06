const inquirer = require("inquirer");

const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "projectName",
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
      name: "motivation",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "motivation",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "problemSolve",
      message: "What problem does your project solve?",
    },
    {
      type: "input",
      name: "learning",
      message: "What did you learn?",
    },
  ])

  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);

    fs.writeFile("autoIndex.html", JSON.stringify(answers), () => {});
  });
// const HTMLTemplate = { name, title, project, bio, gitHub, linkedin, age };
function createFile(userInfo, fileName) {
  fs.writeFile(fileName, JSON.stringify(answers), () => {});
}
