const express = require('express')
const app = express()

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "root"
});

// result = con.connect(function(err) {

//   if (err) throw err;
//   console.log("Connected!");

//   con.query("USE b20102088;", function (err, result) {
//     if (err) throw err;
//   });

//   con.query("SELECT FIRST_NAME FROM workerMHK;", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });

// })

app.get("/api", (req, res) => {
  const userName = req.query.name;
  console.log("hello: " + userName)
  const sql2 = "USE b20102088;";
  con.query(sql2, (err, result) => {
    if (err) throw err;
  })

  const sql = "SELECT FIRST_NAME FROM workerMHK;";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
    return res.json(result);
  })
})

app.listen(5000, ()=> {console.log("Server started on port 5000")})
