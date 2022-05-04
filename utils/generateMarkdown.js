// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = ""
switch (license){
  case "Apache":
    licenseString = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return licenseString

  default: 
  return licenseString
  

}

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github) {

  `Copyright [yyyy] [${github}]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({email, title, license, installation, description, usage, tests, github, contribution, questions, repo}) {
  const licenseBadge = renderLicenseBadge(license)
  return `# ${title}
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${licenseBadge}
  ## Contribution
  ${contribution}
  ## Tests
  ${tests}
  ## Questions
  For questions, please contact me via email at ${email}
  Follow me on GitHub: ${github}

`;
}

module.exports = generateMarkdown;
