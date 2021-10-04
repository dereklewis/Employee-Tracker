const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
const Department = require("./lib/department");
const newDepartment = [];

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "opener",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "Exit",
        ],
      },
    ])
    .then((openerAnswer) => {
      // console.log(openerAnswer);
      if (openerAnswer.opener === "View all Departments") {
        db.query(
          "SELECT * FROM employee_db.department",
          function (err, results) {
            console.table(results);

            mainMenu();
          }
        );
      } else if (openerAnswer.opener === "View all Roles") {
        db.query(
          "SELECT * FROM employee_db.employee_role",
          function (err, results) {
            console.table(results);

            mainMenu();
          }
        );
      } else if (openerAnswer.opener === "View all Employees") {
        db.query("SELECT * FROM employee_db.employee", function (err, results) {
          console.table(results);

          mainMenu();
        });
      } else if (openerAnswer.opener === "Add a Department") {
        inquirer
          .prompt([
            {
              type: "string",
              name: "department",
              message: "What department would you like to add?",
            },
          ])
          .then((data) => {
            db.query(
              "INSERT INTO department (department_name) VALUES (?)",
              data.department,
              function (err, results) {
                mainMenu();
              }
            );
          });
      } else if (openerAnswer.opener === "Add a Role") {
        db.query(
          "SELECT * FROM employee_db.department",
          function (err, results) {
            const resultChoices = results.map(function (item) {
              return { name: item.department_name, value: item.department_id };
            });
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "department",
                  message: "What department would you like to add a role to?",
                  choices: resultChoices,
                },
                {
                  type: "string",
                  name: "title",
                  message: "What is their title?",
                },
                {
                  type: "decimal",
                  name: "salary",
                  message: "What is their salary?",
                },
              ])
              .then((data) => {
                db.query(
                  "INSERT INTO employee_role (department_id, title, salary) VALUES (?)",
                  data.employee_role,
                  function (err, results) {
                    mainMenu();
                  }
                );
              });

            // mainMenu();
          }
        );
      } else if (openerAnswer.opener === "Add an Employee") {
        db.query(
          "SELECT * FROM employee_db.employee_role",
          function (err, results) {
            const roleChoices = results.map(function (item) {
              return { name: item.title, value: item.role_id };
            });
            inquirer
              .prompt([
                {
                  type: "list",
                  name: "role",
                  message: "What will their role be?",
                  choices: roleChoices,
                },
                {
                  type: "string",
                  name: "firstName",
                  message: "What is their first name?",
                },
                {
                  type: "string",
                  name: "lastName",
                  message: "What is their last name?",
                },
              ])
              .then((data) => {
                db.query(
                  "INSERT INTO employee (role_id, first_name, last_name) VALUES (?)",
                  data.employee_role,
                  function (err, results) {
                    mainMenu();
                  }
                );
              });

            // mainMenu();
          }
        );
      } else {
        console.log("Goodbye");
      }
    });
}
mainMenu();
