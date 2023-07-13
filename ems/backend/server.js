const express = require('express')
const app = express()

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "root"
});

let username;
let pass;
let token;

app.get("/login", (req, res) => {

  token = null;
  username = req.query.param1;
  pass = req.query.param2;

  console.log("para1: " + username);
  console.log("para2: " + pass);

  const sql2 = "USE ems;";
  con.query(sql2, (err, result) => {
    if (err) throw err;
  })

  const sql = "SELECT username,pass FROM User;";
  con.query(sql, (err, result) => {
    if (err) throw err;

    for (let x = 0; x < result.length; x++){
      if (result[x].username === username && result[x].pass === pass){
        console.log("Username and password matched");
        token = Math.floor(Math.random() * 10);
        console.log(token)
      }
      else{
        console.log("Invalid Username or Password");
      }
    }
    return res.json(token);
  })
})


app.listen(5000, ()=> {console.log("Server started on port 5000")})
