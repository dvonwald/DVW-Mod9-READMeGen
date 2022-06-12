// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
    return `# ${input.title}
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

## Contributions

${input.contributors}

## Testing

${input.testing}

## Questions and Contact

- GitHub Profile: https://github.com/${input.githubUser}
- Email Address: ${input.email}
`
};

module.exports = generateMarkdown;
