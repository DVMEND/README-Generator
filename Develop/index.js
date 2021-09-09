const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {

    type:"input",
    name: "github",
    message:"What is your Github username?",

    },
    {
    type:"input",
    name:"email",
    message:"What is your email address?"
    },

    {
    type:"input",
    name: "title",
    message: "What is your project title?"

    },

    {
    type:"input",
    name:"description",
    message:"What is your project description?"
    },

    {
    type:"input",
    name:"tableOfContents",
    message:"What is the table of contents?"
    },

    {
    type:"input",
    name:"installation",
    message:"What are the installation instructions?"
    },

    {
    type:"list",
    name:"license",
    message:"Which licenses do you want to use?",
    choices: [
        "MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"
    ]
    },

    {
    type:"input",
    name:"contribution",
    message:"How can users contribute?"
    },

    {
    type:"input",
    name:"tests",
    message:"Which tests were used?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating Readme....");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });

}

// function call to initialize program
init();
