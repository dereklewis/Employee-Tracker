const inquirer = require("inquirer");

db.query('SELECT * FROM employee_db.department', function (err, results) {
  console.table(results);
});

function createDepartment() {

  inquirer.prompt([
    {
      type: "string",
      name: "departmentName",
      message: "What department would you like to create?", 
    },
  ])
  .then((departmentAnswer) => {
    console.log(departmentAnswer);
  })
}

