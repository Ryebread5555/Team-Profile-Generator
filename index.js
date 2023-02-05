// link to the team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// link node modules
const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

// create prompts to generate employees
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Who is the manager?',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("No name has been detected!");
                    return false;
                };
            }
        },
        {
            type: 'input',
            message: "Enter the manager's ID number.",
            name: 'id',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    return true;
                } else {
                    console.log("No ID has been detected!");
                    return false;
                };
            }
        },
        {
            type: 'input',
            message: "Enter the manager's email address.",
            name: 'email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('No email has been detected!')
                    return false; 
                };
            }
        },
        {
            type: 'input',
            message: "Enter the manager's office number.",
            name: 'officeNumber',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    return true;
                } else {
                    console.log("No office number has been detected!");
                    return false;
                };
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

// call
addManager()