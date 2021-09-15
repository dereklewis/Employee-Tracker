INSERT INTO department (id, department_name)
VALUES (001, "Food & Beverage"),
(002, "Front Desk"), (003, "Sales"), (004, "Housekeeping");

SELECT * FROM department;

INSERT INTO role (id, title, salary, department_id)
VALUES 
(001, "F&B Manager", 80000),
(002, "Executive Chef", 100000),
(003, "Line Cook", 40000),
(004, "Server", 50000),
(005, "Front Desk Manager", 70000),
(006, "Front Desk Agent", 45000),
(007, "Director of Sales", 120000),
(008, "Salesperson", 60000),
(009, "Housekeeping Manager", 55000),
(010, "Housekeeper", 35000);

SELECT * FROM role;