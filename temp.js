// require("dotenv").config();

const mysql = require("mysql2");

async function sqlTest() {
  const connection = mysql.createConnection({
    host: "localhost",
    database: "dbms_project",
    user: "dbms-project-user",
    password: "Duxq4p4js9HhkhRDx",
    port: 3306,
  });

  const sqlQuery = "SELECT * FROM USER";

  connection.execute(sqlQuery, (err, results, fields) => {
    // console.log(err);
    console.log(results);
    // console.log(fields);

    console.log("hello");
  });
}

sqlTest();

console.log(process.env.MYSQL_DB_HOST);
