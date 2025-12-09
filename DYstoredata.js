
// Note: Storing Data Dynamically in a Database Maually 
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
require("dotenv").config();  // <-- load .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

let q="INSERT INTO urs ( id, username, email, password) VALUES (?,?,?,?)";
let urs= ["12","rishabh","sarita@xample.com","password12"];

try{
    connection.query(q ,urs, (err, results) => {
    if (err) throw err;
    console.log(results);
        console.log(results.length);
    console.log("Connected to the database.");
    console.log(results[0])
     console.log(results[1])
   connection.end();
})
}
catch(err){
    console.log(err);
}
 
const createRandomUser = () => ({
  userId: faker.string.uuid(),
  username: faker.internet.username(),
  email: faker.internet.email(),

  password: faker.internet.password(),
});
 console.log (createRandomUser());
