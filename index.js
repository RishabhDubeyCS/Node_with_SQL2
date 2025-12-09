const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sql_fakerjs',
  password: 'Saritadubey@2004'
});

// ✅ Only username, email, password (id MySQL handle karega)
const createRandomUser = () => {
  return [
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// ✅ Correct bulk insert query
let q = "INSERT INTO urs (username, email, password) VALUES ?";

let data = [];
for (let i = 0; i < 100; i++) {
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
