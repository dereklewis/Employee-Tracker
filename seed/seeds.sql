INSERT INTO department (id, department_name)
VALUES (001, "Food & Beverage"),
(002, "Front Desk"), (003, "Sales"), (004, "Housekeeping");

SELECT * FROM department;

INSERT INTO employee_role (id, title, salary, department_id)
VALUES 
(001, "F&B Manager", 80000, 001),
(002, "Executive Chef", 90000, 001),
(003, "Line Cook", 40000, 001),
(004, "Server", 50000, 001),
(005, "General Manager", 70000, 002),
(006, "Front Desk Agent", 45000, 002),
(007, "Director of Sales", 99000, 003),
(008, "Salesperson", 60000, 003),
(009, "Housekeeping Manager", 55000, 004),
(010, "Housekeeper", 35000, 004);

SELECT * FROM employee_role;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(001, "John", "Elway", 001, 005),
(002, "Dan", "Marino", 002, 001),
(003, "Brett", "Favre", 003, 002),
(004, "Tom", "Brady", 004, 001),
(005, "Drew", "Brees", 005, NULL),
(006, "Phillip", "Rivers", 006, NULL),
(007, "Patrick", "Mahomes", 007, NULL),
(008, "Warren", "Moon", 008, 005),
(009, "Randall", "Cunningham", 009, 002),
(010, "Eli", "Manning", 010, 004);

SELECT * FROM employee;