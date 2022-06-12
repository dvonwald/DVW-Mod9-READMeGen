// Declaring variables for packages needed for this application
const inquirer = require('inquirer'); // requiring inquirer module to be installed & making it a var
const fs = require('fs'); // requiring fs module built in to JS to be used & assigning var
const generateMarkdown = require('./utils/generateMarkdown'); // linking a modularized local JS file

//Using inquirer prompts for questions for description, install instructions, usage information, contribution guidelines, test instructions, license checkbox, github username, and email address. 
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
.then((input) => {  // Must use a then here because you're waiting for the user input from iquirer.
    let readmeGen = generateMarkdown(input)  // this is delcaring the variable you're going to pass into the fs.writeFile function to the function in the other js file.
    fs.writeFile("README.md", readmeGen, (err) => {  // fs is filesystem, writefile function, passing in the filename, then the variable we just declared which is input + markdown generator, then an error catch
        err ? console.error(err) : console.log("Responses have been saved!") // this lets us know if everything went ok or throws an error
    })
});