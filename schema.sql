DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
	productId INT NOT NULL AUTO_INCREMENT,
	productName VARCHAR(100),
    departmentName VARCHAR(30),
	price INT NOT NULL,
	stock INT NOT NULL DEFAULT 0,
	PRIMARY KEY (productId)
);

CREATE TABLE departments (
	departmentId INT NOT NULL,
    departmentName VARCHAR(30) NOT NULL,
    overheadCosts INT NOT NULL DEFAULT 0,
    primary key (departmentId)
);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Socks", "Clothing", 13.95, 50);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Wonder Mop", "Clothing", 24.95, 50);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("T-Shirts", "Clothing", 17.95, 50);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Underwear", "Clothing", 9.99, 100);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Pretzels", "Pantry", 4.95, 200);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Widget", "Miscellaneous", 1.99, 1000);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("USB Cable", "Electronics", 13.95, 150);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Earbuds", "Electronics", 24, 220);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Cook Book", "Books", 20, 50);

INSERT INTO products (productName, departmentName, price, stock)
VALUES ("Book Book", "Books", 10.99, 50);

select * FROM products;
