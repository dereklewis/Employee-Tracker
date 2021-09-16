const express = require('express');
const mysql = require('mysql2');
const cTable = require("console.table");
const inquirer = require("inquirer");
const department = require("./lib/department");


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

function mainMenu() {
  inquirer.prompt([
    {
      type: "list",
      name: "opener",
      message: "What would you like to do?",
      choices: ["View all Departments", "View all Roles", "View all Employees", "Add a Department", "Exit"],
    },
  ])
  .then((openerAnswer) => {
    // console.log(openerAnswer);
    if (openerAnswer.opener === "View all Departments") {

      db.query('SELECT * FROM employee_db.department', function (err, results) {
  console.table(results);
  
  mainMenu();
});
    
    }
    else if (openerAnswer.opener === "View all Roles") {

      db.query('SELECT * FROM employee_db.employee_role', function (err, results) {
        console.table(results);

        mainMenu();
      });
    }
      else if (openerAnswer.opener === "View all Employees") {

      db.query('SELECT * FROM employee_db.employee', function (err, results) {
        console.table(results);

        mainMenu();
      });
    }
      

      else if (openerAnswer.opener === "Add a Department") {


        inquirer.prompt([
          {
            type: "string",
            name: "department",
            message: "What department would you like to add?",
          }
        ])
        .then((departmentAnswer) => {
          console.log(departmentAnswer.department);

          const departmentOne = new Department(
            departmentAnswer.name,
          );
          console.log(departmentOne);
        });  
        
      }
      
    else {
      console.log("Goodbye");
    }
    
  });
  


}
mainMenu();









app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});