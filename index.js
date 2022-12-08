const inquirer = require('inquirer');
const cTable = require('console.table');
const server = require('./db/server');

function promptDepName() {
    return inquirer.prompt([
        {
          name: 'name',
          message: 'What is the department name? (Required)',
        },
      ])
      .then(answer => {
        server.createDepartment(answer.name);

      })
}

function promptEmployee(){
    return inquirer.prompt([
        {
          name: 'data',
          message: 'What is the employee first and last name? (comma separated) (Required)',
        },
      ])
      .then(answer => {
        var answers = answer.data.split(',');
        server.createEmployee(answers[0], answers[1]);

      })
}

function promptRole(){
    return inquirer.prompt([
        {
          name: 'data',
          message: 'What is the role title and salary? (comma separated) (Required)',
        },
      ])
      .then(answer => {
        var answers = answer.data.split(',');
        server.createRole(answers[0], answers[1]);

      })
}

function promptUser() {
    return inquirer.prompt([
      {
        type: 'rawlist',
        name: 'start',
        message: 'What would you like to do? (Required)',
        choices: ['view all departments', 'view all employees', 'view all roles', 'add a department', 'add a role', 'add an employee', 'update an employee role']
      },
    ])
    .then(answers => {
        console.info('Answer:', answers.start);
        if (answers.start === 'view all departments') {
            server.getDepartments();
        }
        else if (answers.start === 'view all employees') {
            server.getEmployees();
        }
        else if (answers.start === 'view all roles') {
            server.getRoles();
        }
        else if (answers.start === 'add a department') {
            promptDepName();
        }
        else if (answers.start === 'add a role') {
            promptRole();
        }
        else if (answers.start === 'add an employee') {
            promptEmployee();
        }
        else if (answers.start === 'update an employee role') {
            //TODO
        }

    });
}
server.initializeTables();

var inputData = {};
console.log("prompt");
// Prompt each question one by one
promptUser();

 
