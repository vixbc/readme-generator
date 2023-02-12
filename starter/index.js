const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const MarkDown = require("./utils/generateMarkdown");

console.log("running")

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "What is the name of your project",
    },
    {
        type: 'input',
        name: 'Description',
        message: "Describe your project",
    },
    {
        type: 'input',
        name: 'TableOfContents',
        message: "what is in the project",
    },

    {
        type: 'input',
        name: 'Installation',
        message: "Which packages were installed",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "what will it be usd for",
    },

    {
        type: 'list',
        name: 'License',
        message: "usage license",
        choices: ['MIT','ISC','GNUPLv3'],
        filter(val){
            return val.toLowerCase()
        } 
    },
    {
        type: 'input',
        name: 'Contributing',
        message: "who contributed",
    },

    {
        type: 'input',
        name: 'Tests',
        message: "explain tests",
    },
    {
        type: 'input',
        name: 'Questions',
        message: "for Qs, who should they email",
    },
    {
        type: 'input',
        name: 'Github',
        message: "Github link",
    },
];

console.log(questions)



// query funtion
async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = MarkDown.generateMarkdown(answers)
        fs.writeFile('README.md',mark,function (err) {
            if (err){
            console.log("could not save",err)
        }   else{
            console.log("success")
        }

        })
        console.log(mark)
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}

// 

// function to write README file
function writeToFile(fileName,data) {
}

runQuery()

// function to initialize program
function init() {

}

// function call to initialize program
init();

