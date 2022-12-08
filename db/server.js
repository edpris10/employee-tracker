const { app } = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// app.get('/app/departments', (req, res)=> {
//     const sql = `SELECT * FROM departments`;
//     db.query(sql,(err, rows)=> {
//         if (err){
//             res.status(500)
//         }
//     })
// })

// app.listen(PORT, () => {
//     console.log('API server now on port ${PORT}!');
// });

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Spiesmont21!',
      database: 'employee_tracker'
    },
    console.log('Connected to the election database.')
  );

function initializeTables(){
    var sql = 'CREATE TABLE departments (name varchar(225));';
    db.query(sql, (err, result) => {});
    sql = 'CREATE TABLE employees (first_name varchar(225), last_name varchar(225));';
    db.query(sql, (err, result) => {});
    sql = 'CREATE TABLE roles (title varchar(225), salary varchar(225));';
    db.query(sql, (err, result) => {});
} 

  // Create a department
function createDepartment(name) {
    const sql = `INSERT INTO departments (name) VALUES (?);`;
    const params = [name];
    console.log("in create department");
    db.query(sql, params, (err, result) => {
    if (err) {
    console.log(err);
    }
    console.log("Inserted into departments successfully");
    });
}

// Create a role
function createRole (title, salary) {
    const sql = `INSERT INTO roles (title, salary) VALUES (?,?);`;
    const params = [title, salary];

    db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log("Inserted into roles successfully");
    });
}


// Create an employee
function createEmployee (first_name,last_name) {
    const sql = `INSERT INTO employees (first_name, last_name) VALUES (?,?);`;
    const params = [first_name, last_name];

    db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log("Inserted into employees successfully");
    });
}

function getDepartments () {
    console.log("all departments");
    const sql = `SELECT * FROM departments;`;
    db.query(sql,(err, rows)=> {
        if (err){
            res.status(500)
        }

        console.log(rows);
    })
}    

function getEmployees () {
    console.log("all employees");
    const sql = `SELECT * FROM employees;`;
    db.query(sql,(err, rows)=> {
        if (err){
            res.status(500)
        }

        console.log(rows);
    })
}

function getRoles () {
    console.log("all roles");
    const sql = `SELECT * FROM roles;`;
    db.query(sql,(err, rows)=> {
        if (err){
            res.status(500)
        }

        console.log(rows);
    })
}    



module.exports = {createDepartment, createEmployee, createRole, getDepartments, getRoles, getEmployees, initializeTables};
