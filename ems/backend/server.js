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

app.get("/users", (req, res) => {
  const sql2 = "USE ems;";
  con.query(sql2, (err, result) => {
    if (err) throw err;
  })

  const sql = "SELECT user_id,emp_name FROM User;";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
    return res.json(result);
  })
})

app.get("/user", (req, res) => {
  username = req.query.param1;
  const sql2 = "USE ems;";
  con.query(sql2, (err, result) => {
    if (err) throw err;
  })

  const sql = "SELECT emp_name FROM User WHERE userName = username;";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
    return res.json(result);
  })
})

app.use(express.json())
app.post('/attendanceUpdate', (req, res) => {

  const sql2 = "USE ems;";
  con.query(sql2, (err, result) => {
    if (err) throw err;
  })

  console.log(typeof(req.body));
  const { userID, date, overtime, rptTime, lateHours, attendance } = req.body;
  console.log("att:" + attendance)
  // Insert data into the database
  con.query(
    'INSERT INTO Attendance (user_id, overtime, late_hours, attendance_date, attendance, rpt_time) VALUES (?, ?, ?, ?, ?, ?)',
    [userID, overtime, lateHours, date, attendance, rptTime],
    (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred while inserting data.' });
      } else {
        console.log('Data inserted successfully:', results);
        res.json({ message: 'Data inserted successfully.' });
      }
    }
  );
});


app.listen(5000, ()=> {console.log("Server started on port 5000")})
