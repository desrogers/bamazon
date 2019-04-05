DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
	productId INT PRIMARY KEY AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price INT NOT NULL,
	qty INT NOT NULL DEFAULT 0
);

CREATE TABLE departments (
	departmentId INT PRIMARY KEY NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    overheadCosts INT NOT NULL DEFAULT 0
);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Socks", "Clothing", 14, 50);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Wonder Mop", "Clothing", 25, 50);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("T-Shirt", "Clothing", 17, 50);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Underwear", "Clothing", 9, 100);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Pretzels", "Pantry", 4, 200);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Widget", "Miscellaneous", 1, 1000);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("USB Cable", "Electronics", 13, 150);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Earbuds", "Electronics", 24, 220);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Cook Book", "Books", 20, 50);

INSERT INTO products (product_name, department_name, price, qty)
VALUES ("Book Book", "Books", 11, 50)

