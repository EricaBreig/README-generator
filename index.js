// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "email",
      message:
        "So that people can onctac you about questions, please enter your email:",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username:",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe the application",
    },
    {
      type: "input",
      name: "installation",
      message: "How is this application installed?",
    },
    {
      type: "input",
      name: "usage",
      message: "Please describe the usage of the application",
    },
    {
      type: "list",
      name: "license",
      message: "How do you want to license this project?",
      choices: ["Apache", "Eclipse", "GNU", "The Artistic License", "MIT", "Mozilla", "Open Database License"],
    },
    {
      type: "input",
      name: "contribution",
      message: "Please list any collaborators and any attributions",
    },
    {
      type: "input",
      name: "tests",
      message: "Please describe any test functions for the application",
    },
  ]);
};

//Function to write README file
function writeToFile(fileName, data) {}

//Function to initialize app
async function init() {
  try {
    const data = await promptUser();
    const generateContent = generateMarkdown(data);
    await fs.writeFile("./utils/README.md", generateContent, function(err){
        if (err) {
        console.log(err)
    }
    });
    console.log("README Generated!");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
