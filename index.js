const generateHTML = require('./src/generateHTML');
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

const addEmployee = () => {
    console.log('============')


return inquirer.prompt ([
    {
        type: 'list',
        message: "Choose your employee's role.",
        name: 'role',
        choices: [
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        message: "Enter the name of the employee.",
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A name was not entered, please enter a name!")
                return false;
            };
        }
    },
    {
        type: 'input',
        message: "Enter the ID of the employee.",
        name: 'id',
        validate: nameInput => {
            if (isNaN(nameInput)) {
                return true;
            } else {
                console.log("A ID was not entered, please enter the employee's ID!")
                return false;
            };
        }
    },
    {
        type: 'input',
        message: "Enter the email of the employee.",
        name: 'name',
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("A email was not entered, please enter the employee's email!")
                return false;
            };
        }
    },
    {
        type: 'input',
        message: "Enter the engineer's the GitHub username.",
        name: 'github',
        when: (input) => input.role === "Engineer", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A GitHub username was not entered, please enter a username!")
                return false;
            };
        }
    },
    {
        type: 'input',
        message: "Enter the school the intern attends.",
        name: 'school',
        when: (input) => input.role === "Intern", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A school was not entered, please enter a school!")
                return false;
            };
        }
    },
    {
        type: 'confirm',
        message: "Add more employees?",
        name: 'confirmEmployee',
        default: false
    }
])

.then(employeeData => {

    let { name, id, email, role, github, school, confirmEmployee} = employeeData;
    let employee;

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
    };
    teamArray.push(employee);
    if (confirmEmployee) {
        return addEmployee(teamArray);
    } else {
        return teamArray;
    };

})

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your profile is ready to go! Check index.html to see how it looks!")
        };
    })
};



// call
addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
});