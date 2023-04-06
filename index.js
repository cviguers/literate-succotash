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
        "Provide a short description explaining the what, why, and how of your project.",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
      type: "checkbox",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
