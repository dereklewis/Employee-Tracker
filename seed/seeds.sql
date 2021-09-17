INSERT INTO department (department_name)
VALUES ("Food & Beverage"),
("Front Desk"), ("Sales"), ("Housekeeping");

SELECT * FROM department;

INSERT INTO employee_role (title, salary, department_id)
VALUES 
("F&B Manager", 80000, 001),
("Executive Chef", 90000, 001),
("Line Cook", 40000, 001),
("Server", 50000, 001),
("General Manager", 70000, 002),
("Front Desk Agent", 45000, 002),
("Director of Sales", 99000, 003),
("Salesperson", 60000, 003),
("Housekeeping Manager", 55000, 004),
("Housekeeper", 35000, 004);

SELECT * FROM employee_role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Elway", 001, 005),
("Dan", "Marino", 002, 001),
("Brett", "Favre", 003, 002),
("Tom", "Brady", 004, 001),
("Drew", "Brees", 005, NULL),
("Phillip", "Rivers", 006, NULL),
("Patrick", "Mahomes", 007, NULL),
("Warren", "Moon", 008, 005),
("Randall", "Cunningham", 009, 002),
("Eli", "Manning", 010, 004);

SELECT * FROM employee;