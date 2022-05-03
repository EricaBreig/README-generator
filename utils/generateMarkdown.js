// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(email, user, title) {
  return `# ${data.title}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  [![License: ${data.license}](https://img.shields.io/github/license/Github-${data.github}/${data.repo})](https://github.com/${github}/${repo})
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  For questions, please contact me via email at ${data.email}
  Follow me on GitHub: ${data.github}

`;
}

module.exports = generateMarkdown;
