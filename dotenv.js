//npm install dotenv
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
require("dotenv").config();  // <-- load .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// Function for random data
const createRandomUser = () => {
  return [
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "INSERT INTO urs (username, email, password) VALUES ?";

let data = [];
for (let i = 0; i < 10; i++) {
  data.push(createRandomUser());
}

connection.query(q, [data], (err, results) => {
  if (err) {
    console.error("Query error:", err);
    return connection.end();
  }

  console.log("Inserted rows:", results.affectedRows);
  connection.end();
});
