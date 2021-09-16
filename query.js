
db.query('SELECT * FROM employee_db.department', function (err, results) {
  console.table(results);
});