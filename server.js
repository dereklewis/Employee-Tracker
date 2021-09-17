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
              "INSERT INTO department (department_name) VALUES (?)", data.department,
              function (err, results) {
                

                mainMenu();
              }
            );
          });

      } 
      else if (openerAnswer.opener === "Add a Role") {
          db.query(
          "SELECT * FROM employee_db.department",
          function (err, results) {
            
            const resultChoices = results.map(function(item) {
                return {name: item.department_name, value: item.id}
            }  ) 
            inquirer.prompt([
              {
                type: "list",
                name: "department",
                message: "What department would you like to add a role to?",
                choices: resultChoices,
              }
            ])



            // mainMenu();
          }
        );


      }
      else {
        console.log("Goodbye");
      }
    });
}
mainMenu();
