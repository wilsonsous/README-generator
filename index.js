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
]

// Functionality for README file
inquirer.prompt(questions).then(function(response) {
    console.log(response);
    
     var content = generatorMarkdown(response);
     console.log(content);
      fs.writeFile("./ReadMe.md", content, function(err){
          if (err) throw err
          console.log("success");
      });
 } ); 
 

// function writeToFile(fileName, data){
//     fs.writeFile(fileName, data, function(err) {
    //         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err);
//         } else {
//             console.log ("Sucessfully wrote:" + fileName);
//         }
//     })
// }

// function init () {
//     inquirer.prompt(questions)
//     .then(function(data) {
//         writeToFile('test.md', generatorMarkDown(data));
//         console.log(data.License)
//     })
// }

// init();