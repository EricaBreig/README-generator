// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },
        {
            type: "input",
            name: "user",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please describe the application"
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "Please type in your table of contents ",
        },
        {
            type: "input",
            name: "installation",
            message: "How is this application installed? ",
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe the usage of the application"
        },
        {
            type: "list",
            name: "license",
            message: "How do you want to license this project?",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contribution",
            message: "Please list any collaborators and any attributions"
        },
        {
            type: "input",
            name: "tests",
            message: "Please describe any test functions for the application"
        },
    ]);
  };
  

// const promptUser = () => {
//     return inquirer.prompt([
   
//     ]);
//   };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
