// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // requiring inquirer module to be installed & making it a var
const fs = require('fs'); // requiring fs module built in to JS to be used & assigning var
const markdownGen = require('./utils/generateMarkdown') // linking a modularized local JS file

// TODO: Create an array of questions for user input
//questions for description, install instructions, usage information, contribution guidelines, test instructions, license checkbox, github username, email address, 
const questions = [
    "What is the title of your project?",
    "Describe the project and the motivations for it",
    "What did you learn from this project?",
    "What are the steps required to install this project?",
    "What instructions are there on how to use your application? Please include a screenshot.",
    "Who worked on this project?",
    "What are the contribution guidelines for this project?",
    "What are the testing instructions for this project?",
    "What licenses did you use for this project?",
    "What is your github username?",
    "What is your email address?",
];

// Turn above questions into objects with the correct input type as per Inquirer documentation
// Need to capture answers to all of the above questions
// Table of contents also needs to be generated and link to the appropriate sections of the READMe
// github username needs to be turned into a github link
// email address needs to be turned into a link
// licenses need to include badges
// 

// TODO: Create a function to write README file
//this is where I'll use FS and template literals + the markdown to actually write it to a READMe.md file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
