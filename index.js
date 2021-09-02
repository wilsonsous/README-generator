// imports
const inquirer = require("inquirer")
const generatorMarkdown = require("./generatorMarkdown")
const fs = require("fs")

// Set of questions for the user
const questions = [
    {
        type: "input",
        message: "What is your Github user name?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of the project?",
        name: "description",
    },
    {
        type: "input",
        message: "What was the motivation of the project?",
        name: "motivation",
    },
    {
        type: "input",
        message: "What installation does the user need to run this application?",
        name: "install",
    },
    {
        type: "input",
        message: "What command do you need to run this application?",
        name: "instructions",
    },
    {
        type: "input",
        message: "Contact Info",
        name: "contact",
    },
    {
        type: "input",
        message: "Who contributed to this given project?",
        name: "contributors",
    },
    {
        type: "input",
        message: "Does it have a test?",
        name: "test",
    },
    {
        type: "input",
        message: "Does it have a license?",
        name: "license",
    },
]

// Functionality for README file
inquirer.prompt(questions).then(function(response) {
    console.log(response);
    
     var content = generatorMarkdown(response);
     console.log(content);
      fs.writeFile("./GENERATEDREADME.md", content, function(err){
          if (err) throw err
          console.log("success");
      });
 } ); 