// include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Enter your project title.",
    },
    {
      type: "input",
      name: "name",
      message: "Enter your name."
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address."
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github username."
    },
    {
      type: "input",
      name: "description",
      message:
        "Description: Provide a short description explaining the what, why, and how of your project.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Installation: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Usage: Provide instructions and examples for use. Included screenshots as needed.",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Contributing: If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Testing: Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license.",
      choices: [
        "MIT",
        "GNU AGPLv3",
        "Mozilla Public License 2.0",
        "Boost Software License 1.0",
        "Apache License 2.0",
        "None",
      ],
    },
];

// use fs method to write file using collected data
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log("Successfully created README.md"));
}


// function to initialize app
function init() {
    // from the inquirer package, uses the prompt method to ask the user the questions array
    inquirer
      .prompt(questions)
      // arrow function takes user responses, calls writeToFile, creating the new document in /product
      .then((data) => {
          console.log("Creating README.md file...");
          writeToFile('./product/README.md',generateMarkdown(data))
      });
}

// function call to initialize app
init();
