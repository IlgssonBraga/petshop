const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "podman",
  database: "schedule-petshop",
});

module.exports = { connection };
