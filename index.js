// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // requiring inquirer module to be installed & making it a var
const fs = require('fs'); // requiring fs module built in to JS to be used & assigning var
// const markdownGen = require('./utils/generateMarkdown') // linking a modularized local JS file

// TODO: Create an array of questions for user input
//questions for description, install instructions, usage information, contribution guidelines, test instructions, license checkbox, github username, email address, 

inquirer
    .prompt([
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
    console.log(input)
    });

// Need to capture answers to all of the above questions
// Table of contents also needs to be generated and link to the appropriate sections of the READMe
// email address needs to be turned into a link
// licenses need to include badges - Not sure how to do this

// TODO: Create a function to write README file
//this is where I'll use FS and template literals + the markdown to actually write it to a READMe.md file
// function writeToFile('README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
