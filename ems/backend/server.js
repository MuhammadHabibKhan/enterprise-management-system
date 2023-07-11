const express = require('express')
const app = express()

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "root"
});


app.get("/api", (req, res) => {

  const username = req.query.param1;
  console.log("para1: " + username);

  const sql2 = "USE ems;";
  con.query(sql2, (err, result) => {
    if (err) throw err;
  })

  const sql = "SELECT user_id,username FROM User;";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
    return res.json(result);
  })
})


app.listen(5000, ()=> {console.log("Server started on port 5000")})
