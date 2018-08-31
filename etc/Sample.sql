  DROP TABLE orders;
  DROP TABLE products;
  DROP TABLE customers;

CREATE TABLE products (
 id  int PRIMARY KEY,
 name char(20),
 strjs LVARCHAR );

CREATE TABLE customers (
 id  int PRIMARY KEY,
 name char(20),
 strjs LVARCHAR );

CREATE TABLE orders (
 idc int REFERENCES customers(id),
 idp  int REFERENCES products(id),
 qty int,
 strjs LVARCHAR );

