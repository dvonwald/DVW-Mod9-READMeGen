// Declaring variables for packages needed for this application
const inquirer = require('inquirer'); // requiring inquirer module to be installed & making it a var
const fs = require('fs'); // requiring fs module built in to JS to be used & assigning var
const generateMarkdown = require('./utils/generateMarkdown');
// const markdownGen = require('./utils/generateMarkdown') // linking a modularized local JS file


//questions for description, install instructions, usage information, contribution guidelines, test instructions, license checkbox, github username, email address, 
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Write in complete sentences a short description for your project and your reason for creating it.",
    },
    {
        type: 'input',
        name: 'descriptionLearn',
        message: "What did you learn from doing this project? Please use complete sentences.",
    },
    {
        type: 'input',
        name: 'install',
        message: "What are the steps required to install this application?",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions on how to use your application? Please include a screenshot.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who worked on this project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license. Use arrow keys and space bar to select.',
        choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0']
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines for this project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions for this project?'
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Please enter your Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address."
    },
])
.then((input) => {
    let readmeGen = generateMarkdown(input)
    fs.writeFile("ReadmeTest.md", readmeGen, (err) => {
        err ? console.error(err) : console.log("Responses have been saved!")
    })
});

// TODO: Create a function to write README file
//this is where I'll use FS and template literals + the markdown to actually write it to a READMe.md file
// function writeToFile('README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// function generateMarkdown(input) {
//     return `# ${input.title}
// ## Description
// ${input.description} ${input.descriptionLearn}

// ---

// ## Table of Contents

// - ### [Installation](#installation)

// - ### [Usage](#usage)

// - ### [License](#license)

// - ### [Contributions](#contributions)

// - ### [Testing](#testing)

// - ### [Questions and Contact](#questions-and-contact)

// ---

// ## Installation

// ${input.install}

// ## Usage

// ${input.usage}

// ## License

// ## Contributions

// ${input.contributors}

// ## Testing

// ${input.testing}

// ## Questions and Contact

// - GitHub Profile: https://github.com/${input.githubUser}
// - Email Address: ${input.email}
// `
// };
// .then((input) => {
// // console.log(input)
// // const markdownGen = generateMarkdown(input); 
// fs.writeFile("READMeGen.md", input, (err) => {
//     err ? console.log(err) : console.log("READMe.md has been created!")
// })