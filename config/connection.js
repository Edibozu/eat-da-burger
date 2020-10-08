const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.send.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "Edge@062190",
    database: "burger_db",
  });
}

connection.connect();

module.exports = connection;
