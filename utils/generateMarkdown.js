// Function that generates a badge in the readme file based on input
function renderLicenseBadge(input) {
  if (!`${input.license}`) {
    return "";
  }
  if (`${input.license}` == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (`${input.license}` == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)` ;
  }
  if (`${input.license}` == "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)` ;
  }
  if (`${input.license}` == "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
};

// function that generates a link, this is inserted below in the markdown text using a template literal
function renderLicenseLink(input) {
  if (!`${input.license}`) {
    return "";
  }
  if (`${input.license}` == "MIT") {
    return `https://opensource.org/licenses/MIT` ;
  }
  if (`${input.license}` == "ISC") {
    return `https://opensource.org/licenses/ISC`;
  }
  if (`${input.license}` == "GNU GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  }
  if (`${input.license}` == "Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`;
}
};

// Function to generate markdown for README using the user input from the inquirer in index.js
function generateMarkdown(input) {
    return `# ${input.title}
${renderLicenseBadge(input)}
## Description
${input.description} ${input.descriptionLearn}

---

## Table of Contents

- ### [Installation](#installation)

- ### [Usage](#usage)

- ### [License](#license)

- ### [Contributions](#contributions)

- ### [Testing](#testing)

- ### [Questions and Contact](#questions-and-contact)

---

## Installation

${input.install}

## Usage

${input.usage}

## License

${input.license} is the license being used for this application.
For more information, visit: ${renderLicenseLink(input)}

## Contributors

${input.contributors}

## Testing

${input.testing}

## Questions and Contact

- GitHub Profile: https://github.com/${input.githubUser}
- Email Address: ${input.email}
`
};

module.exports = generateMarkdown
